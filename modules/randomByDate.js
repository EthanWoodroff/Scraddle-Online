class RandomByDate{
	constructor(){

	}

    GetRandomByDate()
    {
        const exactDate = new Date();
        const day = new Date(exactDate.getFullYear(), exactDate.getMonth(), exactDate.getDay());
        return this.LCG(day.getTime());
    }

    LCG(X){
        const m = 1028-1; const a = 3; const c = 0;
        //https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-00996-5/S0025-5718-99-00996-5.pdf 16:31 18/01/2025
        for(let i = 0; i < 10; i++){
            X = (a * X + c) % m;
            //{X : 0 <= X < m}
        }
        const normalisedSeed = (X/m);
        return normalisedSeed;
    }
    //https://en.wikipedia.org/wiki/Linear_congruential_generator 16:14 18/01/2025
}

export default RandomByDate;