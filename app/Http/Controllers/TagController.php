<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::withCount('blogs')->paginate(20);
        return view('tags.index', compact('tags'));
    }

    public function welcome()
    {
        return Tag::withCount('blogs')
            ->groupBy('tags.id', 'tags.name')
            ->having('blogs_count', '>', 0)
            ->orderBy('blogs_count', 'desc')
            ->take(10)
            ->get();
    }

    public function show(Tag $tag)
    {
        $blogs = $tag->blogs()->with('author')->paginate(10);
        return view('tags.show', compact('tag', 'blogs'));
    }

    public function create()
    {
        return view('tags.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:tags|max:255',
        ]);

        Tag::create($validated);

        return redirect()->route('tags.index')
            ->with('success', 'Tag created successfully.');
    }

    public function edit(Tag $tag)
    {
        return view('tags.edit', compact('tag'));
    }

    public function update(Request $request, Tag $tag)
    {
        $validated = $request->validate([
            'name' => 'required|unique:tags,name,' . $tag->id . '|max:255',
        ]);

        $tag->update($validated);

        return redirect()->route('tags.index')
            ->with('success', 'Tag updated successfully.');
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();
        return redirect()->route('tags.index')
            ->with('success', 'Tag deleted successfully.');
    }
} 