/******************************************************************************
#     Copyright © 2012 Hector Sanjuan                                         #
#                                                                             #
#     This file is part of Gall-o-Matic.                                      #
#                                                                             #
#     Gall-o-Matic is free software: you can redistribute it and/or modify    #
#     it under the terms of the GNU General Public License as published by    #
#     the Free Software Foundation, either version 3 of the License, or       #
#     (at your option) any later version.                                     #
#                                                                             #
#     Gall-o-Matic is distributed in the hope that it will be useful,         #
#     but WITHOUT ANY WARRANTY; without even the implied warranty of          #
#     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           #
#     GNU General Public License for more details.                            #
#                                                                             #
#     You should have received a copy of the GNU General Public License       #
#     along with Gall-o-Matic.  If not, see <http://www.gnu.org/licenses/>.   #
#                                                                             #
******************************************************************************/

function Gallomatic(){
    var showImage = function(image_container){
        $('#frontpage').hide()
        $('#view').show()
        $('.image_table:visible').hide()


        var height = $(window).height() - 170;
        var width = $(window).width() - 200
        $('div.img_box', image_container).css({
            height: height+'px',
            'max-width': width+'px',
            width: width+'px'
        })

        $(image_container).show();
        $('.img_box img', image_container).trigger('loadme')
        return true
    }

    this.showCurrentHash = function(){
        var hash = window.location.hash
        if (!hash) {
            this.showFrontpage()
            return
        }

        var img_cont = $('.image_table'+hash)
        if (img_cont.length){
            var index = img_cont.index()
            this.showIndex(index)
        } else this.showFrontpage()
    }

    this.showFrontpage = function(){
        window.location.hash = ''
        $('.image_table:visible').hide()
        $('#view').hide()
        $('#frontpage').show()
    }

    this.showIndex = function(index){
        var images = $('#images_container').children()
        var total = images.length
        var img_cont = images[index]
        if (img_cont) {
            showImage(img_cont)
            window.location.hash = '#'+ $(img_cont).attr('id')
            if (index == 0)
                $('.control_bw').css('visibility','hidden')
            else if (index > 0)
                $('.control_bw').css('visibility','visible')

            if (index == total - 1)
                $('.control_fw').css('visibility','hidden')
            else if (index < total - 1)
                $('.control_fw').css('visibility','visible')
        }
    }

    this.showFirst = function(){
        this.showIndex(0)
    }

    this.showNext = function(){
        var img_cont = $('.image_table:visible')
        var index = img_cont.index()
        this.showIndex(index + 1)
    }

    this.showPrev = function(){
        var img_cont = $('.image_table:visible')
        var index = img_cont.index()
        this.showIndex(index - 1)
    }
}

$(document).ready(function(){
    // All gallery images must be lazy-loaded when shown
    $('.image img').lazyload({
        effect: 'fadeIn',
        event: 'loadme',
        skip_invisible: false
    })

    var gallomatic = new Gallomatic()

    // If no hash present, it will show the frontpage
    gallomatic.showCurrentHash()

    $('a.home').click(function(){
        gallomatic.showFrontpage()
        return false
    })

    $('a.start').click(function(){
        gallomatic.showFirst()
        return false
    })

    $('a.backward').click(function(){
        gallomatic.showPrev()
        return false
    })

    $('a.forward').click(function(){
        gallomatic.showNext()
        return false
    })

    $('td.action a').hover(
        function(e){
            var help = $(this).attr('title')
            $('.help_text').html(help)
        },
        function(){
            $('.help_text').empty()
        })
})