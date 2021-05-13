/**
 * Selectize
 * ============================================
 */

function lookup(array, prop, value) {
    for (var i = 0, len = array.length; i < len; i++)
        if (array[i] && array[i][prop] === value) return array[i];
}


$(document).ready(function () {

	var tags 	= config.SelectizeTemplateFieldTags.tags;
	var create 	= config.SelectizeTemplateFieldTags.create;
    var init    = config.SelectizeTemplateFieldTags.init;

    if(create == true) {
        tagsInput = $("#Inputfield_tags");
        tagsExisting = tagsInput.val();

        if(tagsExisting) {
            var thisTagsArr = tagsExisting.split(" ");
            $(thisTagsArr).each(function(i, ttag) {
                if(lookup(tags, "value", ttag)) return;
                tags.push ({ "value": ttag, "text": ttag});
            });
        }
    }

    $('.AdminThemeUikit #Inputfield_tags').removeClass('uk-input');


    if(init == true) {
    	$('#Inputfield_tags').selectize({
    		delimiter: ' ',
    		options: tags,
    		plugins: config.SelectizeTemplateFieldTags.plugins,
    		create: config.SelectizeTemplateFieldTags.create,
    	});
    } 


    if(config.SelectizeTemplateFieldTags.enhance == true) {

        $('.AdminThemeUikit #Inputfield_icon').removeClass('uk-select');
        $('.AdminThemeUikit #Inputfield_pageLabelIcon').removeClass('uk-select');

        $('#Inputfield_icon, #Inputfield_pageLabelIcon').selectize({
            render: {
                item: function(item, escape) {
                    //console.log(item);
                    return '<div>' +
                        '<i class="fa ' + escape(item.value) + '"></i>' +
                        ' <span class="desc">' + escape(item.text) + '</span>'  +
                    '</div>';
                },
                option: function(item, escape) {
                    return '<div>' +
                        '<i class="fa ' + escape(item.value) + '"></i>' +
                        ' <span class="desc">' + escape(item.text) + '</span>'  +
                    '</div>';
                }
            }
        });

    }

});

