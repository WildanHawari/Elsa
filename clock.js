	window.setTimeout("waktu()", 1000);
 
	function waktu() {
		let waktu = new Date();
		setTimeout("waktu()", 1000);
        let jam = waktu.getHours();
        let menit = waktu.getMinutes();
        let detik = waktu.getSeconds();
        let clock = jam+':'+menit+':'+detik;
        document.getElementById("clock").innerHTML = clock;
        
        if(jam == 0 && menit == 30 && detik == 0) {
            let syg = 'Hai Elsa, Semoga cepet dapet doi';
            document.getElementById("note").innerHTML = syg;
        } else if(jam == 0 && menit == 30 && detik == 12) {
            let tdr = 'Mending sekarang tidur, dari pada halu mulu wkwkwk';
            document.getElementById("note").innerHTML = tdr;
        }
	}
