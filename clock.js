	window.setTimeout("waktu()", 1000);
 
	function waktu() {
		let waktu = new Date();
		setTimeout("waktu()", 1000);
        let jam = waktu.getHours();
        let menit = waktu.getMinutes();
        let detik = waktu.getSeconds();
        let clock = jam+':'+menit+':'+detik;
        document.getElementById("clock").innerHTML = clock;
        
        if(jam == 0 && menit == 0 && detik == 0) {
            let syg = 'Hai Eja, Aku sayang kamu :3';
            document.getElementById("note").innerHTML = syg;
        } else if(jam == 0 && menit == 0 && detik == 11) {
            let tdr = 'Sekarang kamu tidur yak, udah malem. Good Night :3';
            document.getElementById("note").innerHTML = tdr;
        }
	}
