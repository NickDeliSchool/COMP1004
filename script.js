

    function switchRegister_and_Login(LoginForm,RegisterForm) {

    if (document.getElementById(LoginForm).style.display == 'block') {

        document.getElementById(LoginForm).style.display = 'none';

        document.getElementById(RegisterForm).style.display = 'block' ;

        document.getElementById(RegisterForm).style.display = 'grid' ;

        document.getElementById(LoginForm).style.zIndex = 0;

        document.getElementById(RegisterForm).style.zIndex = 1;



    }

    if (document.getElementById(LoginForm).style.display == 'grid') {

        document.getElementById(LoginForm).style.display = 'none';

        document.getElementById(RegisterForm).style.display = 'block' ;

        document.getElementById(RegisterForm).style.display = 'grid' ;

        document.getElementById(LoginForm).style.zIndex = 0;

        document.getElementById(RegisterForm).style.zIndex = 1;



    }

    else {

        document.getElementById(RegisterForm).style.display = 'none';

        document.getElementById(LoginForm).style.display = 'grid';

        document.getElementById(RegisterForm).style.zIndex = 0;

        document.getElementById(LoginForm).style.zIndex = 1;

    }

    
    }

    function CloseVerfication(){


        document.getElementById(RegisterForm).style.display = 'none';


        document.getElementById(LoginForm).style.display = 'none';
        
    }

    function HideFunction() {

        document.getElementById("Overlay").style.display = "block";


    }

    function DontHideFunction() {


        document.getElementById("Overlay").style.display = "none";

    }

    function OpenAppointment(){
        
        document.getElementById("AppointmentForm").style.display = "block";


    }

    function CloseAppointment(){

        document.getElementById("AppointmentForm").style.display = "none";


    }

    function AddApointment(){





    }

    function ChangeDateBackwards() {






    }

    function ChangeDateForwards() {






    }


