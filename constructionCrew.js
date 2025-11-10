function constructionCrew(workers){
    if(!workers.dizziness){
        return workers
    }
    
    workers.levelOfHydrated += workers.weight * workers.experience * 0.1;
    workers.dizziness = false;

    return workers

}
console.log(constructionCrew({ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }))