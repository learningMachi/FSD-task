let resume = {
    'name' : 'Lokesh kumar',
    'contact': {
        'email':"victorlokesh26@gmail.com",
        'location': "krishnagiri"
        } ,
    'summary': "Software Developer",
    'WorkExperience': ['contentreviewer@wipro'],
    'Education': ['Bsc','FSD'],
    'Skills':['javascript','HTML','Manual testing'], 
 }
 for(let key in resume ){
    console.log( key, ':', resume[key]);
}