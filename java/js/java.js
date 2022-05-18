var btn = document.querySelectorAll(".key li"),
input = document.querySelector(".input valor"),
operador = document.querySelector(".operador");
for(var i = 0; i<btn.length; i++){
    document.onkeypress = function(event){
        var key = event.charCode;
        for(var e = 0; e <= 10; e++){
            if(key === (48+e)){
                input.innerHTML += e;
            }
        }
        switch(key){
                case 1:
                input.innerHTML += "*";
                break;
                case 2:
                input.innerHTML += "+"
                break;
                case 3:
                input.innerHTML += "-"
                break;
                case 4:
                input.innerHTML += "."
                break;
                case 5:
                input.innerHTML += "/"
                break;
                case 6:
                case 7:
                    input.innerHTML = "";
                    
                    var equacao = input.innerHTML;
                        try{
                            input.innerHTML = eval(equacao);
                        } catch (e){
                            alert ('erro na expressão, idiota')
                        }
        
                    
                    
                    break;
                        case 89:
                        case 9:
                        input.innerHTML = "";
                        break;
                    default:
                    break;
                    }
                }
        

    }
btn[i].addEventListener('click', function(){
    var btnval = this.innerHTML,
    inputval = input.innerHTML;
})
