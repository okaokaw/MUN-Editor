    //File API 读取文本
        //名单读取
    function handleFileSelect(evt) {
            evt.stopPropagation();
            evt.preventDefault();
           
            var files = evt.dataTransfer.files; 

        if(files[0])
        {
            var reader = new FileReader();
            reader.readAsText(files[0]);
            reader.onload = loaded1;    
        }
    }
    
    function loaded1(evt) {
        var fileString = evt.target.result;
        document.getElementById('show-items').innerHTML= fileString;

    }

        //记录读取

    function handleFileSelect2(evt) {
            evt.stopPropagation();
            evt.preventDefault();
           
            var files = evt.dataTransfer.files; 

        if(files[0])
        {
            var reader = new FileReader();
            reader.readAsText(files[0]);
            reader.onload = loaded2;    
        }
    }


    function loaded2(evt) {
        var fileString = evt.target.result;
        UE.getEditor('editor').execCommand('insertHtml', fileString)
       
    }



    //保存到本地 
    function doSave(value, type, name) {  
        var blob;  
        if (typeof window.Blob == "function") {  
            blob = new Blob([value], {type: type});  
        } else {  
            var BlobBuilder = window.BlobBuilder || window.MozBlobBuilder || window.    WebKitBlobBuilder || window.MSBlobBuilder;  
            var bb = new BlobBuilder();  
            bb.append(value);  
            blob = bb.getBlob(type);  
        }  
        var URL = window.URL || window.webkitURL;  
        var bloburl = URL.createObjectURL(blob);  
        var anchor = document.createElement("a");  
        if ('download' in anchor) {  
            anchor.style.visibility = "hidden";  
            anchor.href = bloburl;  
            anchor.download = name;  
            document.body.appendChild(anchor);  
            var evt = document.createEvent("MouseEvents");  
            evt.initEvent("click", true, true);  
            anchor.dispatchEvent(evt);  
            document.body.removeChild(anchor);  
        } else if (navigator.msSaveBlob) {  
            navigator.msSaveBlob(blob, name);  
        } else {  
            location.href = bloburl;  
        }  
    }  