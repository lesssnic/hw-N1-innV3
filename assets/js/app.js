

    const signs = [
        {name:'козерог', m:1, d:20},
        {name:'водолей', m:2, d:20},
        {name:'рыбы',    m:3, d:20},
        {name:'овен',    m:4, d:20},
        {name:'телец',   m:5, d:20},
        {name:'близнецы',m:6, d:21},
        {name:'рак',     m:7, d:22},
        {name:'лев',     m:8, d:23},
        {name:'дева',    m:9, d:23},
        {name:'весы',    m:10,d:23},
        {name:'скорпион',m:11,d:22},
        {name:'стрелец', m:12,d:21},
        {name:'козерог', m:13,d:20}
        ];

    const symbolYears = [
        'обезьяна',
        'петух',
        'собака',
        'свенья',
        'крыса',
        'бык',
        'тигр',
        'кролик',
        'дракон',
        'змея',
        'лошадь',
        'коза'
    ];

    Vue.createApp({

        data(){
            return {
                innCode: '3463463460'
            }
        },
        computed: {
            fullYearsFunc(){
                if(this.validityFunc){
                let firstTimeStamp = new Date(1900, 0, 0).getTime();
                let birthdayTimeStamp = (+this.innCode.slice(0, 5)) * 86400000 + firstTimeStamp;
                let novaTimeStamp = new Date().getTime();
                
                return (new Date(firstTimeStamp + (novaTimeStamp - birthdayTimeStamp)).getYear());
                }
            },
            birthdayFunc(){
                if(this.validityFunc){
                let firstTimeStamp = new Date(1900, 0, 0).getTime();
                let birthdayTimeStamp = (+this.innCode.slice(0, 5)) * 86400000 + firstTimeStamp;
                return `${(new Date(birthdayTimeStamp).getFullYear())}-${(new Date(birthdayTimeStamp).getMonth()+1)}-${(new Date(birthdayTimeStamp).getDate())}`;
                }
            },
            validityFunc(){
                let k = 0;
                for (i = 0; i < this.innCode.length - 1; i++){
                    let control = [-1, 5, 7, 9, 4, 6, 10 , 5, 7];
                    k += +this.innCode[i] * control[i];
                    }
                let kn = (k%11)%10;
                if (kn == +this.innCode[this.innCode.length-1] && this.innCode.length == 10){
                    return true;
                }else return false
            },
            sexFunc(){
                if(this.validityFunc){
                    if (+this.innCode[this.innCode.length-2]%2 == 1){
                        return 'Мужчина';
                    }else return 'Женщина';
                }
            },
            signsFunc(){
                if(this.validityFunc){
                    let dateB = this.birthdayFunc.split('-');
                    let [y, m, d] = dateB;
                    if (signs[m-1].d <= d) {
                        return signs[m].name;
                    } else return signs[m-1].name;
                }
            },
            calendarFunc(){
                if(this.validityFunc){
                    let dateB = this.birthdayFunc.split('-');
                    let [y, m, d] = dateB;
                    return symbolYears[+y%12];
                }
            }
        },
        methods: {
            
        }
    }).mount('#app');

