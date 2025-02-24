<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::with(['author', 'tags'])
            ->latest()
            ->paginate(10);
            
        return view('blogs.index', compact('blogs'));
    }

    public function show(Blog $blog)
    {
        $blog->load(['author', 'tags']);
        return view('blogs.show', compact('blog'));
    }

    public function create()
    {
        $tags = Tag::all();
        return view('blogs.create', compact('tags'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'slug' => 'required|unique:blogs|max:255',
            'content' => 'required',
            'image' => 'nullable|image|max:2048',
            'tags' => 'array|exists:tags,id',
            'published_at' => 'nullable|date',
        ]);

        $blog = new Blog($validated);
        $blog->author_id = Auth::id();

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('blog-images', 'public');
            $blog->image = $path;
        }

        $blog->save();

        if (!empty($validated['tags'])) {
            $blog->tags()->sync($validated['tags']);
        }

        return redirect()->route('blogs.show', $blog)
            ->with('success', 'Blog post created successfully.');
    }

    public function edit(Blog $blog)
    {
        $tags = Tag::all();
        return view('blogs.edit', compact('blog', 'tags'));
    }

    public function update(Request $request, Blog $blog)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'slug' => 'required|max:255|unique:blogs,slug,' . $blog->id,
            'content' => 'required',
            'image' => 'nullable|image|max:2048',
            'tags' => 'array|exists:tags,id',
            'published_at' => 'nullable|date',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('blog-images', 'public');
            $validated['image'] = $path;
        }

        $blog->update($validated);

        if (isset($validated['tags'])) {
            $blog->tags()->sync($validated['tags']);
        }

        return redirect()->route('blogs.show', $blog)
            ->with('success', 'Blog post updated successfully.');
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();
        return redirect()->route('blogs.index')
            ->with('success', 'Blog post deleted successfully.');
    }

    public function welcome()
    {
        return Blog::with(['author', 'tags'])
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now())
            ->latest('published_at')
            ->take(6)
            ->get();
    }
} 