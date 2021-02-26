# Ajou University - Internet & Security Lab

## A. Plan of Organization

### Section 1

 - [ ] Navigation bar
    - Home
    - Professor
    - Members
    - Projects
    - Publications
    - Patents
    - Gallery
    - Contact

 - [ ] About ilab
    - Summary
    - Current Research
    - Location

### Section 2

 - [ ] Professor
    - Contact
    - Activities
        - Experiences
        - Conferences
        - Courses

### Section 3

 - [ ] Members
    - Current
        - Ph.D Candidates
        - Ph.D Students
        - Master Students
    - Alunmi
        - Ph.D
        - Masters
 
### Section 4

 - [ ] Research Projects
    - Ongoing
    - Done

### Section 5

 - [ ] Publications
    - Books + Chapters
    - Papers 
        - Korean Journals
        - International Journal
        - International Conference
        - Lecture Note Series
    
### Section 6

 - [ ] Patents
    - Korea(Domestic)
    - United States

### Section 7

 - [ ] Gallery

### Section 8

 - [ ] Contact


## B. Proto Source

### Color

 - [Black Line](https://color.adobe.com/ko/search?q=%EB%B8%94%EB%9E%99)

<hr>

#### [Old Site](http://security.ajou.ac.kr/security/research/research01.jsp)

#### [Origin Site](http://ict.ajou.ac.kr/ict2/rnd/rnd.jsp)

## C. Thinking

## Section 1 이미지 효과 넣기

```
object-fit나 object-position으로 움직이는 이미지 효과 넣어보기
```

## 이건좀 유용하다

### 컨텐츠를 정중앙에!!!

```css
.home .intro-content{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
}
```

## D. Desktop, Tablet, Mobile 사이즈

```css
/*
##Device = Desktops
##Screen = 1281px to higher resolution desktops
##Device = 데스크탑
##Screen = 1281px 이상 해상도 데스크탑
*/

@media (min-width: 1281px) {

//CSS

}

/*
##Device = Laptops, Desktops
##Screen = B/w 1025px to 1280px
##Device = 랩탑, 데스크탑
##Screen = 1025px에서 1280px 사이
*/

@media (min-width: 1025px) and (max-width: 1280px) {

//CSS

}

/*
##Device = Tablets, Ipads (portrait),
##Screen = B/w 768px to 1024px
##Device = 태블릿, 아이패드(세로),
##Screen = 768px에서 1024px 사이
*/

@media (min-width: 768px) and (max-width: 1024px) {

//CSS

}

/*
##Device = Tablets, Ipads (landscape)
##Screen = B/w 768px to 1024px
##Device = 태블릿, 아이패드(가로)
##Screen = 768px에서 1024px 사이
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

//CSS

}

/*
##Device = Low Resolution Tablets, Mobiles (Landscape)
##Screen = B/w 481px to 767px
##Device = 저해상도 태블릿, 모바일(가로)
##Screen = 481px에서 767px 사이
*/

@media (min-width: 481px) and (max-width: 767px) {

//CSS

}

/*
##Device = Most of the Smartphones Mobiles (Portrait)
##Screen = B/w 320px to 479px
##Device = 대부분의 스마트폰 모바일 기기(세로)
##Screen = 320px에서 479px 사이
*/

@media (min-width: 320px) and (max-width: 480px) {

//CSS

}
```

## E. 브라우저

```css
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
```