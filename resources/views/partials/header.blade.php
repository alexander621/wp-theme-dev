<main-header
  blog-name="{{ get_bloginfo('name', 'display') }}"
  homepage-url="{{ home_url('/') }}"
  @if (is_front_page()) homepage="true" @endif
>
  @if (has_nav_menu('primary_navigation'))
    {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
  @endif
</main-header>