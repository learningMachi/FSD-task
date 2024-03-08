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
 for(let index =0; index< entries.length;index++){
    let entry = entries[index];
    console.log(entry[0],':', entry[1]);
 }