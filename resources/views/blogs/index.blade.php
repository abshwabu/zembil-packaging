<x-app-layout>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold">Blogs</h2>
                        <a href="{{ route('blogs.create') }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Create New Blog
                        </a>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        @foreach($blogs as $blog)
                            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                @if($blog->image)
                                    <img src="{{ Storage::url($blog->image) }}" alt="{{ $blog->title }}" class="w-full h-48 object-cover">
                                @endif
                                <div class="p-4">
                                    <h3 class="text-xl font-semibold mb-2">{{ $blog->title }}</h3>
                                    <p class="text-gray-600 text-sm mb-2">By {{ $blog->author->name }}</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        @foreach($blog->tags as $tag)
                                            <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                                {{ $tag->name }}
                                            </span>
                                        @endforeach
                                    </div>
                                    <a href="{{ route('blogs.show', $blog) }}" class="text-blue-500 hover:text-blue-700">
                                        Read more →
                                    </a>
                                </div>
                            </div>
                        @endforeach
                    </div>

                    <div class="mt-6">
                        {{ $blogs->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout> 