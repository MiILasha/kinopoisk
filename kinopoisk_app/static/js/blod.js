var fileEl = document.querySelector("input");

fileEl.onchange = function(e) {


    var file = e.target.files[0]; // selected file

    if (!file) {
        console.log("nothing here");
        return;
    }

    console.log(file);
    console.log('file.size-' + file.size);
    console.log('file.type-' + file.type);
    console.log('file.acutalName-' + file.name);

    let start = performance.now();

    var mime = file.type, // store mime for later
        rd = new FileReader(); // create a FileReader

    if (/video/.test(mime)) {

        rd.onload = function(e) { // when file has read:


            var blob = new Blob([e.target.result], {
                    type: mime
                }), // create a blob of buffer
                url = (URL || webkitURL).createObjectURL(blob), // create o-URL of blob
                video = document.createElement("video"); // create video element
            //console.log(blob);
            video.preload = "metadata"; // preload setting

            video.addEventListener("loadedmetadata", function() { // when enough data loads
                console.log('video.duration-' + video.duration);
                console.log('video.videoHeight-' + video.videoHeight);
                console.log('video.videoWidth-' + video.videoWidth);
                //document.querySelector("div")
                //  .innerHTML = "Duration: " + video.duration + "s" + " <br>Height: " + video.videoHeight; // show duration
                (URL || webkitURL).revokeObjectURL(url); // clean up

                console.log(start - performance.now());
                // ... continue from here ...

            });
            video.src = url; // start video load
        };
    } else if (/image/.test(mime)) {
        rd.onload = function(e) {

            var blob = new Blob([e.target.result], {
                    type: mime
                }),
                url = URL.createObjectURL(blob),
                img = new Image();

            img.onload = function() {
                console.log('iamge');
                console.dir('this.height-' + this.height);
                console.dir('this.width-' + this.width);
                URL.revokeObjectURL(this.src); // clean-up memory
                console.log(start - performance.now()); // add image to DOM
            }

            img.src = url;

        };
    }

    var chunk = file.slice(0, 1024 * 1024 * 10); // .5MB
    rd.readAsArrayBuffer(chunk); // read file object

};