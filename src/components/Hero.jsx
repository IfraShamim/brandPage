const Hero = () =>{
    return(
        <>
        <div className="container">
        <div className="left">
            <h1>YOUR FEET <br/> DESERVE <br/>THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br/>HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br/>THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br/>SHOES.</p>
             <div className="heroBtn">
                <button>Shop Now</button>
                <button id="category">Category</button>
             </div>
             <p className="p">Also Available On</p>
             <div className="img">
                <img src="./images/flipkart.png" alt="flipkart" />
                <img src="./images/amazon.png" alt="amazon" />
             </div>
        </div>
        <div className="right">
            <img src="./images/shoe_image.png" alt="shoe_image" />
        </div>
        </div>
        </>
    )
}
export default Hero;