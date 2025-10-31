

const ResturantRequest=(location="")=>{
  return new promise =((resolve,reject)=>{
        const GooglemapApi=mapApi[location];
        if(!GooglemapApi){
 reject("Not Found Location")
        }
        resolve(GooglemapApi)

  })
 
    //  resolve(GooglemapAp);

}

ResturantRequest().then((result)=>{
    console.log(result)

}).cacth((error)=>{
    console.log(error)
})

 


