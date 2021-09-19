var DEACTIVATE_TIMER = 5; // in seconds
// membuat Variable state low .ketika awal dijalnkan dan pada 
// kondisi motion belum terjadi getaran maka pintu tidak terbuka dan kipas tidak menyala
var state = LOW;
var current_time = 0;
// kemudian membuat fuction setup
function setup() {
	setState(state);
}// di sini selanjutnya membuat status dimana jika motion sensor
// mendeteksi adanya gerak maka pintu maupun kipas menyala.
function mouseEvent(pressed, x, y, firstPress) {// Mendekatkan mouse ke motion sensor
	setState(HIGH);
}
// selanjutnya membuat sebuah fuction loop
function loop() {
	if ( state == HIGH ) {
		current_time--;// dan ini akan dijalankan jika motion sensor mendeteksi getaran
		if ( current_time <= 0 )
			setState(LOW);
	}
	delay(1000);// di sini saya meng set delay 1 detik
}
function setState(newState) {
	state = newState;
	if (state === LOW) {
		digitalWrite(0, LOW);
	} else { // dan jika tidak terjadi getaran ,maka otomatis setelah 5 pintu dan kipas akan mati
		digitalWrite(0, HIGH);
		current_time = DEACTIVATE_TIMER;// megset waktu reset 5 detik
	}
	setDeviceProperty(getName(), "state", state);
}
