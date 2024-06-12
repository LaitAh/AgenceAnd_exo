<?php
function my_theme_enqueue_scripts() {
    // Enqueue the compiled CSS file from Gulp
    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/style.css');

    // Enqueue the custom JavaScript file
    wp_enqueue_script('my-custom-script', get_template_directory_uri() . '/assets/js/script.js', array(), null, true);

    // Enqueue Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap', false);

    // Enqueue Google Material Icons
    wp_enqueue_style('google-icons', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0', false);
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_scripts');
?>
