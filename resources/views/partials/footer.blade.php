@php 
$itsLabel = "Website developed <a href='http://indietechsolutions.com/' target='_blank'>Indietech</a>";
@endphp
<main-footer its-label="{{ $itsLabel }}">
  @if (has_nav_menu('secondary_navigation'))
    {!! wp_nav_menu(['theme_location' => 'secondary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
  @endif
</main-footer>