n=4
for(let i=0; i<n; i++){
  let row=""
  for(j=0;j<i+1;j++){
    row = row+'*'
  }
  console.log(row)
}

output

"*"
"**"
"***"
"****"

============================================


n=5
for(let i=0; i<n; i++){
  let row=""
  for(j=0;j<n-i;j++){
    row = row+(j+1)
  }
  console.log(row)
}

output

"12345"
"1234"
"123"
"12"
"1"

===================================================

n=5
for(let i=0; i<n; i++){
  let row=""
  for(j=n;j>=0;j--){
    if(j<=i){
      row=row+"*"
    }else{
    row=row+" "
    }
  
  }
  console.log(row)
}

output
"     *"
"    **"
"   ***"
"  ****"
" *****"
