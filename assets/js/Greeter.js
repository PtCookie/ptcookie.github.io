const color = `\x1b[32m%s\x1b[0m`;
const ascii = `
                    NNNNNNNN                                    
                   dsyyyyyyyyhm        mhh                      
                   ysyNNNNmmyssm       ysy                      
         mdyy     Nssd       ssh  Nddddssydddddm   yhdN         
     Ndhssydm     dssN      mssd  dyyysssyyyyyym   dhysyhdN     
 NdhssydmN        hsy     Ndssh       hss             NdhssyhmN 
NsshmN            sssssssssshm        ssh                 NdyssN
NhssyhmN         mssdNNNNNN          mssm               Nmhysyh 
   NdhssyhmN     hss                 hss            NmhysyhdN   
       mdyssh    ssh                 ysy           ysyhdN       
          Nmd   mssm                 hssyhhhhN     dN           
                mddN                  mdddddd                   
                                                                
               NmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmN               
               dddddddddddddddddddddddddddddddddm               
`;

class Greeter {
  greetConsole() {
    console.log(color, ascii);
    console.log(color, 'Welcome to whoami(ptCookie)!');
  }

  cleanIntro() {
    const intro = document.querySelector('#intro-container');

    if (intro) {
      setTimeout(() => {
        intro.remove();
      }, 4000);
    }
  }
}

export default Greeter;
