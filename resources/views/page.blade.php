@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    <div class="container mx-auto pt-32 pb-20">
      @include('partials.page-header')
      @includeFirst(['partials.content-page', 'partials.content'])
    </div>
  @endwhile
@endsection
