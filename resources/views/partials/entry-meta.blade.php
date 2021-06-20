<div class="flex items-center">
  <time class="updated pr-3" datetime="{{ get_post_time('c', true) }}">
    {{ get_the_date() }}
  </time>

  <p class="byline author vcard">
    <span>{{ __('By', 'sage') }}</span>
    <a href="{{ get_author_posts_url(get_the_author_meta('ID')) }}" rel="author" class="fn">
      {{ get_the_author() }}
    </a>
  </p>
</div>
