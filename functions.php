<?php

/**
 * =========================================================================
 * FUNÇÃO HELPER
 * =========================================================================
 *
 * Remove os estilos do tema pai (Hello Elementor) e do WordPress.
 * Esta função é chamada por todas as nossas funções de app.
 */
function helper_remover_estilos_tema() {
    // Handles do Hello Elementor (que encontramos antes)
    wp_dequeue_style( 'hello-elementor-theme-style' );
    wp_deregister_style( 'hello-elementor-theme-style' );

    wp_dequeue_style( 'hello-elementor' );
    wp_deregister_style( 'hello-elementor' );

    // Handle dos blocos do WordPress
    wp_dequeue_style( 'wp-block-library' );
    wp_deregister_style( 'wp-block-library' );

    // Handle do Elementor (garantia)
    wp_dequeue_style( 'elementor-frontend' );
    wp_deregister_style( 'elementor-frontend' );
}


/**
 * =========================================================================
 * REGISTRO DOS HOOKS (Ações)
 * =========================================================================
 *
 * Registra todas as nossas funções para rodar no 'wp_enqueue_scripts'.
 * A prioridade 99 garante que elas rodem DEPOIS do tema.
 */
add_action( 'wp_enqueue_scripts', 'carregar_assets_vite_manifest', 99 );
add_action( 'wp_enqueue_scripts', 'carregar_assets_vite_manifest_v2', 99 );
add_action( 'wp_enqueue_scripts', 'carregar_assets_neuroterapia', 99 );
add_action( 'wp_enqueue_scripts', 'carregar_assets_traumasnocasamento', 99 );
add_action( 'wp_enqueue_scripts', 'carregar_assets_jwvocabulary', 99 );
add_action( 'wp_enqueue_scripts', 'carregar_assets_rorschach', 99 ); // <<< ADICIONADO
add_action( 'wp_enqueue_scripts', 'carregar_assets_neuroterapia_v2', 99 );



/**
 * =========================================================================
 * FUNÇÕES DE CARREGAMENTO DE APPS
 * =========================================================================
 */

/**
 * App: versiculoterapeutico (com manifest.json)
 */
function carregar_assets_vite_manifest() {
    // Só carrega os assets na nossa página específica
    if ( !is_page_template('page-versiculoterapeutico.php') ) {
        return;
    }
    
    // 1. Remove estilos do tema
    helper_remover_estilos_tema();

    // 2. Carrega assets do app
    $manifest_path = get_stylesheet_directory() . '/app-vite/.vite/manifest.json';

    if ( !file_exists($manifest_path) ) {
        error_log("Manifest do Vite (V1) não encontrado em: " . $manifest_path);
        return;
    }

    $manifest = json_decode( file_get_contents($manifest_path), true );
    $theme_uri = get_stylesheet_directory_uri();
    
    $entry_point = 'index.html'; 
    if(isset($manifest[$entry_point])) {
        $entry_info = $manifest[$entry_point];

        if(isset($entry_info['file'])) {
            wp_enqueue_script(
                'vite-app-js', 
                $theme_uri . '/app-vite/' . $entry_info['file'], 
                array(), null, true
            );
        }
        if(isset($entry_info['css'])) {
            foreach($entry_info['css'] as $css_file) {
                wp_enqueue_style(
                    'vite-app-css-' . basename($css_file), 
                    $theme_uri . '/app-vite/' . $css_file
                );
            }
        }
    }
}


/**
 * App: jwvocabulary (sem manifest.json, usa glob)
 */
function carregar_assets_jwvocabulary() {
     // 1. Só executa o código se estivermos no template correto.
    if ( !is_page_template('page-jwvocabulary.php') ) {
        return;
    }

    // 2. Remove estilos do tema
    helper_remover_estilos_tema();
    
    // 3. Carrega assets do app
    $assets_dir_path = get_stylesheet_directory() . '/app-jwvocabulary/assets';
    $assets_dir_uri = get_stylesheet_directory_uri() . '/app-jwvocabulary/assets';

    $js_files = glob($assets_dir_path . '/index-*.js');
    if ( !empty($js_files) ) {
        $js_file_name = basename($js_files[0]);
        wp_enqueue_script(
            'jwvocabulary-app-js', // Handle único
            $assets_dir_uri . '/' . $js_file_name,
            array(), null, true
        );
    }

    $css_files = glob($assets_dir_path . '/index-*.css');
    if ( !empty($css_files) ) {
        $css_file_name = basename($css_files[0]);
        wp_enqueue_style(
            'jwvocabulary-app-css', // Handle único
            $assets_dir_uri . '/' . $css_file_name
        );
    }
}


/**
 * App: versiculoterapeutico-v2 (com manifest.json)
 */
function carregar_assets_vite_manifest_v2() {
    if ( !is_page_template('page-versiculoterapeutico-v2.php') ) {
        return;
    }

    // 1. Remove estilos do tema
    helper_remover_estilos_tema();
    
    // 2. Carrega assets do app
    $manifest_path = get_stylesheet_directory() . '/app-vite-v2/.vite/manifest.json';

    if ( !file_exists($manifest_path) ) {
        error_log("Manifest do Vite V2 não encontrado em: " . $manifest_path);
        return;
    }

    $manifest = json_decode( file_get_contents($manifest_path), true );
    $theme_uri = get_stylesheet_directory_uri();

    $entry_point = 'index.html'; 
    if(isset($manifest[$entry_point])) {
        $entry_info = $manifest[$entry_point];

        if(isset($entry_info['file'])) {
            wp_enqueue_script(
                'vite-app-v2-js', 
                $theme_uri . '/app-vite-v2/' . $entry_info['file'], 
                array(), null, true
            );
        }
        if(isset($entry_info['css'])) {
            foreach($entry_info['css'] as $css_file) {
                wp_enqueue_style(
                    'vite-app-v2-css-' . basename($css_file), 
                    $theme_uri . '/app-vite-v2/' . $css_file
                );
            }
        }
    }
}


/**
 * App: neuroterapiabiblica (sem manifest.json, usa glob)
 */
function carregar_assets_neuroterapia() {
    if ( !is_page_template('page-neuroterapiabiblica.php') ) {
        return;
    }

    // 1. Remove estilos do tema
    helper_remover_estilos_tema();
    
    // 2. Carrega assets do app
    $assets_dir_path = get_stylesheet_directory() . '/app-neuroterapia/assets';
    $assets_dir_uri = get_stylesheet_directory_uri() . '/app-neuroterapia/assets';

    $js_files = glob($assets_dir_path . '/index-*.js');
    if ( !empty($js_files) ) {
        $js_file_name = basename($js_files[0]);
        wp_enqueue_script(
            'neuro-app-js', 
            $assets_dir_uri . '/' . $js_file_name,
            array(), null, true
        );
    }

    $css_files = glob($assets_dir_path . '/index-*.css');
    if ( !empty($css_files) ) {
        $css_file_name = basename($css_files[0]);
        wp_enqueue_style(
            'neuro-app-css', 
            $assets_dir_uri . '/' . $css_file_name
        );
    }
}


/**
 * App: traumasnocasamento (sem manifest.json, usa glob)
 */
function carregar_assets_traumasnocasamento() {
    if ( !is_page_template('page-traumasnocasamento.php') ) {
        return;
    }

    // 1. Remove estilos do tema
    helper_remover_estilos_tema();

    // 2. Carrega assets do app
    $assets_dir_path = get_stylesheet_directory() . '/app-traumasnocasamento/assets';
    $assets_dir_uri = get_stylesheet_directory_uri() . '/app-traumasnocasamento/assets';

    $js_files = glob($assets_dir_path . '/index-*.js');
    if ( !empty($js_files) ) {
        $js_file_name = basename($js_files[0]);
        wp_enqueue_script(
            'traumas-app-js', 
            $assets_dir_uri . '/' . $js_file_name,
            array(), null, true
        );
    }

    $css_files = glob($assets_dir_path . '/index-*.css');
    if ( !empty($css_files) ) {
        $css_file_name = basename($css_files[0]);
        wp_enqueue_style(
            'traumas-app-css', 
            $assets_dir_uri . '/' . $css_file_name
        );
    }
}


/**
 * App: rorschach (sem manifest.json, usa glob)
 * * <<< NOVO BLOCO ADICIONADO <<<
 * */
function carregar_assets_rorschach() {
    if ( !is_page_template('page-rorschach.php') ) {
        return;
    }

    // 1. Remove estilos do tema
    helper_remover_estilos_tema();
    
    // 2. Carrega assets do app
    $assets_dir_path = get_stylesheet_directory() . '/app-rorschach/assets';
    $assets_dir_uri = get_stylesheet_directory_uri() . '/app-rorschach/assets';

    $js_files = glob($assets_dir_path . '/index-*.js');
    if ( !empty($js_files) ) {
        $js_file_name = basename($js_files[0]);
        wp_enqueue_script(
            'rorschach-app-js', // Handle único
            $assets_dir_uri . '/' . $js_file_name,
            array(), null, true
        );
    }

    $css_files = glob($assets_dir_path . '/index-*.css');
    if ( !empty($css_files) ) {
        $css_file_name = basename($css_files[0]);
        wp_enqueue_style(
            'rorschach-app-css', // Handle único
            $assets_dir_uri . '/' . $css_file_name
        );
    }
}


/**
 * App: neuroterapiabiblica v2
 */
function carregar_assets_neuroterapia_v2() {
    if ( !is_page_template('page-neuroterapiabiblica-v2.php') ) {
        return;
    }

    // 1. Remove estilos do tema
    helper_remover_estilos_tema();
    
    // 2. Carrega assets do app
    $assets_dir_path = get_stylesheet_directory() . '/app-neuroterapia-v2/assets';
    $assets_dir_uri = get_stylesheet_directory_uri() . '/app-neuroterapia-v2/assets';

    $js_files = glob($assets_dir_path . '/index-*.js');
    if ( !empty($js_files) ) {
        $js_file_name = basename($js_files[0]);
        wp_enqueue_script(
            'neuro-app-v2-js', 
            $assets_dir_uri . '/' . $js_file_name,
            array(), null, true
        );
    }

    $css_files = glob($assets_dir_path . '/index-*.css');
    if ( !empty($css_files) ) {
        $css_file_name = basename($css_files[0]);
        wp_enqueue_style(
            'neuro-app-v2-css', 
            $assets_dir_uri . '/' . $css_file_name
        );
    }
}


?>