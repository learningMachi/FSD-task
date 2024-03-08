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
    let entries = Object.entries(resume);
entries.forEach(entry =>{
    console.log(entry[0], ':', entry[1]);
});