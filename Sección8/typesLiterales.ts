type Type = "success" | "error";

console.log(myType)

function alert(type: Type, message: string){
    switch(type){
        case 'success':
            console.log('Success: ' + message);
            break;
        case 'error':
            console.log('Error: ' + message);
            break;
        default:
            console.log('Info: ' + message);
            break;
    }
}

alert('success', 'Todo salió bien');
alert('error', 'Todo salió mal');