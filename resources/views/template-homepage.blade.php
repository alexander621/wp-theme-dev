{{--
  Template Name: Homepage Template
--}}

@extends('layouts.app')

@section('content')
  <hero-section page-id="{{ get_the_ID() }}"></hero-section>
  <intro-section></intro-section>
  <partner-action-carousel-section></partner-action-carousel-section>
  <learning-communities-section></learning-communities-section>
  <our-featured-partners-section></our-featured-partners-section>
  <upcoming-events-section></upcoming-events-section>
@endsection
