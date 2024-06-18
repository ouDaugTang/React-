// Set 생성
const set = new Set();

// 요소 추가
set.add('타바스코 버거')
set.add('진도 대파 버거')
set.add('레몬 슈슈 버거')
set.add('창녕 갈릭 버거')

// 원조 조회
console.log(set.has('타바스코 버거'));

set.delete('레몬 슈슈 버거')

// 크기 확인
console.log(set.size);

const set2 = new Set(['모짜렐라 인다버거', '한우불고기', '불새버거'])

console.log(set2);


// set 반복
console.log("set 반복");
set.forEach((value) => {
    console.log(value);
})

for ( const value of set2 ) {
    console.log(value);
}

