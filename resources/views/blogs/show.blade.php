<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>{{ $blog->title }} - Zembil Packaging</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="{{ asset('assets/favicon.ico') }}" />
        <!-- Bootstrap Icons-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="{{ asset('css/styles.css') }}" rel="stylesheet" />
    </head>
    <body>
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="/">
                    <img src="{{ asset('assets/img/logo.png') }}" alt="logo" width="200" height="150">
                </a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="/#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="/#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="/#portfilio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="/#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Blog Content -->
        <section class="page-section" style="margin-top: 100px">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <!-- Blog Title -->
                        <h1 class="fw-bold mb-3">{{ $blog->title }}</h1>

                        <!-- Meta Information -->
                        <div class="text-muted mb-4">
                            <span>By {{ $blog->author->name }}</span>
                            <span class="mx-2">|</span>
                            <span>{{ $blog->published_at?->format('F j, Y') }}</span>
                        </div>

                        <!-- Tags -->
                        <div class="mb-4">
                            @foreach($blog->tags as $tag)
                                <a href="{{ route('tags.show', $tag) }}" class="badge bg-secondary text-decoration-none link-light me-1">
                                    {{ $tag->name }}
                                </a>
                            @endforeach
                        </div>

                        <!-- Featured Image -->
                        @if($blog->image)
                            <img src="{{ Storage::url($blog->image) }}" alt="{{ $blog->title }}" class="img-fluid rounded mb-4">
                        @endif

                        <!-- Blog Content -->
                        <div class="blog-content">
                            {!! $blog->content !!}
                        </div>

                        <!-- Back Button -->
                        <div class="mt-5">
                            <a href="/" class="btn btn-primary">
                                <i class="bi bi-arrow-left"></i> Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer-->
        <footer class="bg-light py-5 mt-5">
            <div class="container px-4 px-lg-5">
                <div class="small text-center text-muted">
                    Copyright &copy; 2024 Zembil Packaging. All rights reserved.
                </div>
            </div>
        </footer>

        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="{{ asset('js/scripts.js') }}"></script>
    </body>
</html> 