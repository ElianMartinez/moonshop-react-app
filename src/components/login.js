import './login.css';
import imagen from './img/image-fondo.c8aae282.png';
 let Login = () => {
    var sectionStyle = {
        backgroundImage: "url(" + { imagen } + ")"
      };
    return (
        <>
        <section className="fondo" style={sectionStyle}>
        
          <div className="modal-dialog text-center" >
          <div className="col-sm-8 main-section">
          <div class="modal-content">
         <form class="col-12" method="get">
                    <h3 className="b7">LOGIN</h3>
                    
                    <div class="form-group" id="user-group">
                        <input type="text" class="form-control" placeholder="CORREO" name="correo" />
                    </div>
                    <div class="form-group" id="contrasena-group">
                        <input type="password" class="form-control" placeholder="CONTRASEÑA" name="password"/>
                    </div>
                   
                    <div class="col-12 forgot">
                        <a href="/main/register" className="b8"> ¿No Tienes cuenta?</a>
                    </div>
                   
                <a href="/">
                    <button href="/" type="button" class="btn btn-danger btn-circle btn-xl"><svg width="10" height="20" viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.567 14.9909C18.5857 15.5283 18.3993 16.0727 18.0042 16.4967L5.56272 29.8383C4.77129 30.687 3.4417 30.7335 2.59332 29.942C1.74496 29.1509 1.69854 27.8216 2.48964 26.9728L13.4985 15.1679L1.69338 4.15963C0.845008 3.36819 0.798592 2.03899 1.5897 1.1907C2.38079 0.341605 3.71039 0.295174 4.5591 1.087L17.9009 13.5281C18.3247 13.9237 18.5482 14.4538 18.567 14.9909Z" fill="white"/>
                        </svg></button>
                        </a>
                </form>
          </div>
          

          </div>
          </div>

          </section>
        </>
    );
 }

 export default Login;