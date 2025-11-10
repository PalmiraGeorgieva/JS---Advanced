function taxes(name, population, treasury){
    const city = {}

    city.name = name;
    city.population = Number(population);
    city.treasury = Number(treasury);
    city.taxRate = 10

    city.collectTaxes = function(){
        this.treasury += Math.floor(this.population * this.taxRate)

    }
    city.applyGrowth = function(percent){
        this.population += Math.floor(this.population * Number(percent) / 100)
    }

    city.applyRecession = function(percent){
        this.treasury -= Math.ceil(this.treasury * Number(percent) / 100)
    }

    return city

}
{
   const city = taxes("Tortuga", 7000, 15000);
   console.log(city)

   city.collectTaxes()
   console.log(city.treasury)

   city.applyGrowth(5)
   console.log(this.population)

   city.applyRecession(2)
   console.log(this.treasury)


}