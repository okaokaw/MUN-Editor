//List
    //添加li
      $('form').submit(function () {
          if ($('input').val() !== '') {
              var input_value = $('input').val();
              $('ul').append('<li>' + input_value + '<a class="end" href="">○</a></li>');     
          };

          $('input').val('');
          return false;
      });

    //结束、删除
      
    $(document).on('click', '.end', function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass("gray"))  {
            $(this).parent().remove();
        }
        
        else {
            $(this).parent().addClass("gray");
        }
    });

    
    //hover显示<a>
     var $itemList = $('#show-items');
      
     $itemList.delegate('li', 'mouseover mouseout', function(event) {
         var $this = $(this).find('a');
          
         if(event.type === 'mouseover') {
             $this.stop(true, true).fadeIn();
         } else {
             $this.stop(true, true).fadeOut();
         }
     });  


    //点名
    function outn()   {
        var ax = document.getElementById('ax').value;
        var bx = document.getElementById('bx').value;
        var simple, n23, b20;
        simple = Math.round(ax/2);
        n23    = Math.round(ax * 2 / 3);
        b20    = Math.round(ax / 5);
        document.getElementsByTagName("span")[0].innerHTML = simple;
        document.getElementsByTagName("span")[1].innerHTML = n23;
        document.getElementsByTagName("span")[2].innerHTML = b20;
        
    }


    //投票
    function jdds()  {
        var upvote = document.getElementById('upvote').value;
        var downvote = document.getElementById('downvote').value;  
        var jd = upvote/2 + downvote/2

        if (upvote>=jd) {
            passed(true);
        }
        else {
            notpassed(true);
        }
    }  


   function ersan()  {
        var upvote = document.getElementById('upvote').value;
        var downvote = document.getElementById('downvote').value;  
        var es = Math.round(upvote*2/3 + downvote*2/3)

        if (upvote>=es) {
            passed(true);
        }
        else {
            notpassed(true);
        }

        
    }    

    //重置
    function Clearspan()  {
        for (var i = 0; i < 3; i++) {
            document.getElementsByTagName("span")[i].innerHTML ="";
        };
    }


    function Clear(j) {
        if (j == 2) {
            Clearspan() ;
        }

        for (var i = j*2+1; i <= j*3; i++) {
            document.getElementsByTagName("input")[i].value = "";
        };

    }    

 

//DND读取文本

        function handleDragOver(evt) {
          evt.stopPropagation();
          evt.preventDefault();
          evt.dataTransfer.dropEffect = 'copy'; 
        }

        function handleDragOver2(evt) {
          evt.stopPropagation();
          evt.preventDefault();
          evt.dataTransfer.dropEffect = 'copy'; 
        }

        
        var dropZone = document.getElementById('dropZone');
        dropZone.addEventListener('dragover', handleDragOver, false);
        dropZone.addEventListener('drop', handleFileSelect, false); 

        var dropZone2 = document.getElementById('dropZone2');
        dropZone2.addEventListener('dragover', handleDragOver2, false);
        dropZone2.addEventListener('drop', handleFileSelect2, false); 


    //保存发言名单


    function Savelist(){  
        var a = document.getElementById('show-items').innerHTML;
        doSave(a, "text/latex", "List.txt");   

    }  

    function Savetext(){
        var b = UE.getEditor('editor').getContent();
        doSave(b, "text/latex", "Text.txt"); 
   
    }