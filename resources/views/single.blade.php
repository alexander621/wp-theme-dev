@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    <div class="container mx-auto pt-32 pb-20">
      @includeFirst(['partials.content-single-' . get_post_type(), 'partials.content-single'])
    </div>
  @endwhile
@endsection
