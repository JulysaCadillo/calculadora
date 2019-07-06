import React ,{Component}from 'react';


class Contenedor extends Component {

constructor(){
            super()
            this.state ={
            resultado :'',
            base:''
            }}
            clickAumentar=()=>{
                
            }
            clickuno=()=>{
                const {resultado} =this.state;
               
               this.setState({resultado:resultado+'1'})
            }
            clickdos=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:resultado +'2'})
            }
            clicktres=()=>{
                const {resultado} =this.state;
               
               this.setState({resultado:resultado+'3'})
            }
            clickcuatro=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:resultado +'4'})
            }
            clickcinco=()=>{
                const {resultado} =this.state;
               
               this.setState({resultado:resultado+'5'})
            }
            clickseis=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:resultado +'6'})
            }
            clickmas=()=>{
                const {resultado} =this.state;
              
                this.setState({resultado:''})
                this.setState({base:resultado})
                

                
            }
            clickigual=()=>{
                const {resultado} =this.state;
                const {base} =this.state;
                const suma = (parseInt(base) +parseInt(resultado)+"")
               this.setState({resultado:suma})
            }
           


            clickpordos=()=>{
                const {resultado} =this.state;
              const nwresultado =(parseInt(resultado)*2)+"";
                this.setState({resultado:nwresultado })
            }
    render(){

        const {resultado} =this.state;

        return(
            <div>
            <div >
        
           Resultado : ----> {resultado}
            </div>
            <div >
            <button onClick={this.clickuno}  >1 </button>
            <button onClick={this.clickdos}  >2 </button>
            <button onClick={this.clicktres}  >3 </button>
       
             </div>
             <div >
           <button onClick={this.clickcuatro}  >4 </button>
            <button onClick={this.clickcinco}  >5 </button>
            <button onClick={this.clickseis}  >6 </button>
       
             </div>

            
         
            <button onClick={this.clickigual}  >= </button>
            <button onClick={this.clickmas}  >+</button>
            <button onClick={this.clickp}  >.</button>
            </div>
        )
        }
}
export default Contenedor;