<?php


$info = array(
    'title'     => 'Selectize Template & Field Tags',
    'author'    => 'Macrura',
    'version'   => 005,
    'summary'   => 'Admin helper for enabling selectize tagging on templates.',
    'href'      => '',
    'icon'      => 'tags',
    'singular'  => true,
    'autoload'  => true,
    //'requires'  => array("JquerySelectize"),
	);

if($this->wire('config')->version < '3.0.67') {
	$info['requires'] = "JquerySelectize";
}