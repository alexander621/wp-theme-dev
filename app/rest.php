<?php
use function Roots\asset;

function get_cpt_data($request, $type=array("newsroom")) {
    $params = $request->get_params();
    $paged = $params["page"] ?? 1;
    $perpage = $params["perpage"] ?? 9;
    $is_featured = $params["is_featured"] ?? null;
    $keywords = $params["keywords"] ?? null;
    $categories = $params["categories"] ?? null;
    $sorting = $params["sorting"] ?? "desc";

    $args = array(
        'post_type'      => $type,
        'paged'          => $paged,
        'posts_per_page' => $perpage,
    );

    if ($is_featured) {
        $args["meta_query"] = array("featured" => array('key' => 'is_featured'));
    }
    $query = new \WP_Query($args);
    $max_num_pages = $query->max_num_pages;
    $datas = array_map("mapping_posts", $query->posts);
    return [
        "posts"     => $datas, 
        "reload"    => $params["redraw"] ?? false, 
        "nextPage"  => $max_num_pages > $paged, 
        "totalpage" => $max_num_pages
    ];
}

function mapping_posts($post) {
    $image = get_the_post_thumbnail_url($post->ID) ? get_the_post_thumbnail_url($post->ID, 'original') : null;
    $thumbnail = get_the_post_thumbnail_url($post->ID) ? get_the_post_thumbnail_url($post->ID, 'thumbnail') : asset("images/logo.png")->uri();
    $data = [
        "post_id"   => $post->ID,
        "link"      => get_permalink($post->ID),
        "thumbnail" => $thumbnail,
        "image"     => $image,
        "title"     => $post->post_title,
        "slug"      => $post->post_name,
        "date"      => get_the_date(null, $post->ID),
        "content"   => get_the_content("",false,$post->ID),
        "excerpt"   => substr(strip_tags($post->post_content), 0, 60)
    ];
    if (get_post_type($post->ID) == "slider") {
        $data["button"] = get_field("button_label",$post->ID);
        $data["button_url"] = get_field("url",$post->ID);
    }
    else if (get_post_type($post->ID) == "partner") {
        $data["website_url"] = get_field("website_url",$post->ID);
    }
    else if (get_post_type($post->ID) == "event") {
        $data["start_date"] = get_field("start_date",$post->ID);
        $data["end_date"] = get_field("end_date",$post->ID);
        $data["detail_url"] = get_field("external_link",$post->ID) && get_field("external_link",$post->ID) != "" ? get_field("external_link",$post->ID) : $data["link"] ;
    }
    return $data;
}

function get_homepage_detail($request) {
    $page_id = $request->get_params()["page_id"];
    $hero = [
        "bg"      => get_field("hero_background",$page_id),
        "title"   => get_field("hero_title",$page_id),
        "tagline" => get_field("hero_tagline",$page_id),
    ];
    
    $intro = [
        "bg"           => get_field("into_background",$page_id),
        "title"        => get_field("intro_title",$page_id),
        "description"  => get_field("intro_description",$page_id),
        "button_label" => get_field("intro_label",$page_id),
        "button_url"   => get_field("intro_url",$page_id),
    ];

    $community = [
        "title"       => get_field("learning_title",$page_id),
        "description" => get_field("learning_description",$page_id),
        "images"      => get_field("learning_images_row",$page_id),
    ];

    return[
        "hero"      => $hero,
        "intro"     => $intro,
        "community" => $community
    ];
}

function get_slider($request) {
    return get_cpt_data($request,array("slider"));
}

function get_event($request) {
    return get_cpt_data($request,array("event"));
}

function get_partners($request) {
    return get_cpt_data($request, array("partner"));
}

add_action('rest_api_init', function () {
    register_rest_route('homepage', 'detail', array(
        'methods'             => 'POST',
        'callback'            => 'get_homepage_detail',
        'permission_callback' => '__return_true'
    ));
    register_rest_route('homepage', 'slider', array(
        'methods'             => 'POST',
        'callback'            => 'get_slider',
        'permission_callback' => '__return_true'
    ));
    register_rest_route('events', 'all', array(
        'methods'             => 'POST',
        'callback'            => 'get_event',
        'permission_callback' => '__return_true'
    ));
    register_rest_route('homepage', 'partner', array(
        'methods'             => 'POST',
        'callback'            => 'get_partners',
        'permission_callback' => '__return_true'
    ));
});