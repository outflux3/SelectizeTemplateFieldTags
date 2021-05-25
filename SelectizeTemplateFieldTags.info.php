<?php

$info = array(
    'title'     => 'Selectize Template & Field Tags',
    'author'    => 'Macrura',
    'version'   => '012',
    'summary'   => 'Admin helper for enabling selectize tagging on templates.',
    'href'      => '',
    'icon'      => 'tags',
    'singular'  => true,
    'autoload'  => true,
	);



if(version_compare($this->wire('config')->version, '3.0.67', '<')) {
    $info['requires'] = "JquerySelectize";
}
