import Image from "next/image"
import { useEffect, useRef, useState } from "react"

function Carousel() {

    const [carouselWidth, setCarouselWidth] = useState(0)
    const [whiteBoxPosition, setWhiteBoxPosition] = useState(0)
    const [manualCarouselPage, setManualCarouselPage] = useState(1)
    const [arrowButtonWidth, setArrowButtonWidth] = useState(0)
    const [arrowButtonOffset, setArrowButtonOffset] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const scrollCarousel = useRef(null)
    const rightAlign = useRef(null)

    const data = [
      {
        title: "Discover innovative ways to decorate",
        desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      },
      {
        title: "We are available all across the globe",
        desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      },
      {
        title: "Manufactured with the best materials",
        desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      }
    ]

    function handleResize()
    {
      // @ts-ignore: Object is possibly 'null'.
      setCarouselWidth(scrollCarousel.current.offsetWidth)

      // @ts-ignore: Object is possibly 'null'.
      setWhiteBoxPosition(rightAlign.current.offsetLeft)  
    }

    function handleScroll() {

      var carousel = document.getElementById("scrollCarousel")

      if (carousel?.scrollLeft)
      {
          var scrollRate = carousel.scrollLeft / carouselWidth

          if (carouselWidth > 0)
          {
            if (scrollRate < 0.75)
            {
                setManualCarouselPage(1)
            }
            else if (scrollRate >= 0.75 && scrollRate <= 1.35)
            {
                setManualCarouselPage(2)
            }
            else if (scrollRate > 1.35 && scrollRate <= 2)
            {
                setManualCarouselPage(3)
            }
          }

      }

    }

    function setCarouselPage(page: number) {

      if (page === 1)
      {
        // @ts-ignore: Object is possibly 'null'.
        firstRef.current.scrollIntoView({ behavior: "smooth" })
        setTitle(data[page - 1].title)
        setDesc(data[page - 1].desc)
      }
      else if (page === 2)
      {
        // @ts-ignore: Object is possibly 'null'.
        secondRef.current.scrollIntoView({ behavior: "smooth" })
        setTitle(data[page - 1].title)
        setDesc(data[page - 1].desc)
      }
      else if (page === 3)
      {
        // @ts-ignore: Object is possibly 'null'.
        thirdRef.current.scrollIntoView({ behavior: "smooth" })
        setTitle(data[page - 1].title)
        setDesc(data[page - 1].desc)
      }
    }

    function nextPage() {

      var nextCarouselPage

      nextCarouselPage = manualCarouselPage + 1

      if (nextCarouselPage > 3)
      {
        nextCarouselPage = 1
      }

      setCarouselPage(nextCarouselPage)

    }

    function previousPage() {

      var nextCarouselPage

      nextCarouselPage = manualCarouselPage - 1
        
      if (nextCarouselPage < 1)
      {
        nextCarouselPage = 3
      }

      setCarouselPage(nextCarouselPage)

    }

    useEffect(() => {

      setTitle(data[0].title)
      setDesc(data[0].desc)

      if (typeof window !== "undefined")
      {

        if (window.innerHeight)
        {

          window.addEventListener("resize", handleResize)

          handleResize()

          return () => window.removeEventListener("resize", handleResize)   
        }
      }

      handleResize()

    }, [])

    useEffect(() => {
      const scroll = scrollCarousel.current

      // @ts-ignore: Object is possibly 'null'.
      scroll.addEventListener("scroll", handleScroll)

    }, [handleScroll])

    useEffect(() => {

      var arrowWidth = whiteBoxPosition - carouselWidth
      
      if (whiteBoxPosition === 0)
      {
        console.log("default arrow button width - 20")
        setArrowButtonWidth(20)
      }
      else
      {
        console.log("arrow button width - ", arrowWidth)
        setArrowButtonWidth((arrowWidth / 4) - 7)
      }

      {/* DO NOT UNCOLLAPSE THIS UNLESS YOU REALLY HATE YOURSELF */}
      switch (arrowWidth) {
        case 100:
          setArrowButtonOffset("lg:-right-[100px]")
          break;
      
          case 101:
          setArrowButtonOffset("lg:-right-[101px]")
          break;
      
          case 102:
          setArrowButtonOffset("lg:-right-[102px]")
          break;
      
          case 103:
          setArrowButtonOffset("lg:-right-[103px]")
          break;
      
          case 104:
          setArrowButtonOffset("lg:-right-[104px]")
          break;
      
          case 105:
          setArrowButtonOffset("lg:-right-[105px]")
          break;
      
          case 106:
          setArrowButtonOffset("lg:-right-[106px]")
          break;
      
          case 107:
          setArrowButtonOffset("lg:-right-[107px]")
          break;
      
          case 108:
          setArrowButtonOffset("lg:-right-[108px]")
          break;
      
          case 109:
          setArrowButtonOffset("lg:-right-[109px]")
          break;
      
          case 110:
          setArrowButtonOffset("lg:-right-[110px]")
          break;
      
          case 111:
          setArrowButtonOffset("lg:-right-[111px]")
          break;
      
          case 112:
          setArrowButtonOffset("lg:-right-[112px]")
          break;
      
          case 113:
          setArrowButtonOffset("lg:-right-[113px]")
          break;
      
          case 114:
          setArrowButtonOffset("lg:-right-[114px]")
          break;
      
          case 115:
          setArrowButtonOffset("lg:-right-[115px]")
          break;
      
          case 116:
          setArrowButtonOffset("lg:-right-[116px]")
          break;
      
          case 117:
          setArrowButtonOffset("lg:-right-[117px]")
          break;
      
          case 118:
          setArrowButtonOffset("lg:-right-[118px]")
          break;
      
          case 119:
          setArrowButtonOffset("lg:-right-[119px]")
          break;
      
          case 120:
          setArrowButtonOffset("lg:-right-[120px]")
          break;
      
          case 121:
          setArrowButtonOffset("lg:-right-[121px]")
          break;
      
          case 122:
          setArrowButtonOffset("lg:-right-[122px]")
          break;
      
          case 123:
          setArrowButtonOffset("lg:-right-[123px]")
          break;
      
          case 124:
          setArrowButtonOffset("lg:-right-[124px]")
          break;
      
          case 125:
          setArrowButtonOffset("lg:-right-[125px]")
          break;
      
          case 126:
          setArrowButtonOffset("lg:-right-[126px]")
          break;
      
          case 127:
          setArrowButtonOffset("lg:-right-[127px]")
          break;
      
          case 128:
          setArrowButtonOffset("lg:-right-[128px]")
          break;
      
          case 129:
          setArrowButtonOffset("lg:-right-[129px]")
          break;
      
          case 130:
          setArrowButtonOffset("lg:-right-[130px]")
          break;
      
          case 131:
          setArrowButtonOffset("lg:-right-[131px]")
          break;
      
          case 132:
          setArrowButtonOffset("lg:-right-[132px]")
          break;
      
          case 133:
          setArrowButtonOffset("lg:-right-[133px]")
          break;
      
          case 134:
          setArrowButtonOffset("lg:-right-[134px]")
          break;
      
          case 135:
          setArrowButtonOffset("lg:-right-[135px]")
          break;
      
          case 136:
          setArrowButtonOffset("lg:-right-[136px]")
          break;
      
          case 137:
          setArrowButtonOffset("lg:-right-[137px]")
          break;
      
          case 138:
          setArrowButtonOffset("lg:-right-[138px]")
          break;
      
          case 139:
          setArrowButtonOffset("lg:-right-[139px]")
          break;
      
          case 140:
          setArrowButtonOffset("lg:-right-[140px]")
          break;
      
          case 141:
          setArrowButtonOffset("lg:-right-[141px]")
          break;
      
          case 142:
          setArrowButtonOffset("lg:-right-[142px]")
          break;
      
          case 143:
          setArrowButtonOffset("lg:-right-[143px]")
          break;
      
          case 144:
          setArrowButtonOffset("lg:-right-[144px]")
          break;
      
          case 145:
          setArrowButtonOffset("lg:-right-[145px]")
          break;
      
          case 146:
          setArrowButtonOffset("lg:-right-[146px]")
          break;
      
          case 147:
          setArrowButtonOffset("lg:-right-[147px]")
          break;
      
          case 148:
          setArrowButtonOffset("lg:-right-[148px]")
          break;
      
          case 149:
          setArrowButtonOffset("lg:-right-[149px]")
          break;
      
          case 150:
          setArrowButtonOffset("lg:-right-[150px]")
          break;
      
          case 151:
          setArrowButtonOffset("lg:-right-[151px]")
          break;
      
          case 152:
          setArrowButtonOffset("lg:-right-[152px]")
          break;
      
          case 153:
          setArrowButtonOffset("lg:-right-[153px]")
          break;
      
          case 154:
          setArrowButtonOffset("lg:-right-[154px]")
          break;
      
          case 155:
          setArrowButtonOffset("lg:-right-[155px]")
          break;
      
          case 156:
          setArrowButtonOffset("lg:-right-[156px]")
          break;
      
          case 157:
          setArrowButtonOffset("lg:-right-[157px]")
          break;
      
          case 158:
          setArrowButtonOffset("lg:-right-[158px]")
          break;
      
          case 159:
          setArrowButtonOffset("lg:-right-[159px]")
          break;
      
          case 160:
          setArrowButtonOffset("lg:-right-[160px]")
          break;
      
          case 161:
          setArrowButtonOffset("lg:-right-[161px]")
          break;
      
          case 162:
          setArrowButtonOffset("lg:-right-[162px]")
          break;
      
          case 163:
          setArrowButtonOffset("lg:-right-[163px]")
          break;
      
          case 164:
          setArrowButtonOffset("lg:-right-[164px]")
          break;
      
          case 165:
          setArrowButtonOffset("lg:-right-[165px]")
          break;
      
          case 166:
          setArrowButtonOffset("lg:-right-[166px]")
          break;
      
          case 167:
          setArrowButtonOffset("lg:-right-[167px]")
          break;
      
          case 168:
          setArrowButtonOffset("lg:-right-[168px]")
          break;
      
          case 169:
          setArrowButtonOffset("lg:-right-[169px]")
          break;
      
          case 170:
          setArrowButtonOffset("lg:-right-[170px]")
          break;
      
          case 171:
          setArrowButtonOffset("lg:-right-[171px]")
          break;
      
          case 172:
          setArrowButtonOffset("lg:-right-[172px]")
          break;
      
          case 173:
          setArrowButtonOffset("lg:-right-[173px]")
          break;
      
          case 174:
          setArrowButtonOffset("lg:-right-[174px]")
          break;
      
          case 175:
          setArrowButtonOffset("lg:-right-[175px]")
          break;
      
          case 176:
          setArrowButtonOffset("lg:-right-[176px]")
          break;
      
          case 177:
          setArrowButtonOffset("lg:-right-[177px]")
          break;
      
          case 178:
          setArrowButtonOffset("lg:-right-[178px]")
          break;
      
          case 179:
          setArrowButtonOffset("lg:-right-[179px]")
          break;
      
          case 180:
          setArrowButtonOffset("lg:-right-[180px]")
          break;
      
          case 181:
          setArrowButtonOffset("lg:-right-[181px]")
          break;
      
          case 182:
          setArrowButtonOffset("lg:-right-[182px]")
          break;
      
          case 183:
          setArrowButtonOffset("lg:-right-[183px]")
          break;
      
          case 184:
          setArrowButtonOffset("lg:-right-[184px]")
          break;
      
          case 185:
          setArrowButtonOffset("lg:-right-[185px]")
          break;
      
          case 186:
          setArrowButtonOffset("lg:-right-[186px]")
          break;
      
          case 187:
          setArrowButtonOffset("lg:-right-[187px]")
          break;
      
          case 188:
          setArrowButtonOffset("lg:-right-[188px]")
          break;
      
          case 189:
          setArrowButtonOffset("lg:-right-[189px]")
          break;
      
          case 190:
          setArrowButtonOffset("lg:-right-[190px]")
          break;
      
          case 191:
          setArrowButtonOffset("lg:-right-[191px]")
          break;
      
          case 192:
          setArrowButtonOffset("lg:-right-[192px]")
          break;
      
          case 193:
          setArrowButtonOffset("lg:-right-[193px]")
          break;
      
          case 194:
          setArrowButtonOffset("lg:-right-[194px]")
          break;
      
          case 195:
          setArrowButtonOffset("lg:-right-[195px]")
          break;
      
          case 196:
          setArrowButtonOffset("lg:-right-[196px]")
          break;
      
          case 197:
          setArrowButtonOffset("lg:-right-[197px]")
          break;
      
          case 198:
          setArrowButtonOffset("lg:-right-[198px]")
          break;
      
          case 199:
          setArrowButtonOffset("lg:-right-[199px]")
          break;
      
          case 200:
          setArrowButtonOffset("lg:-right-[200px]")
          break;
      
          case 201:
          setArrowButtonOffset("lg:-right-[201px]")
          break;
      
          case 202:
          setArrowButtonOffset("lg:-right-[202px]")
          break;
      
          case 203:
          setArrowButtonOffset("lg:-right-[203px]")
          break;
      
          case 204:
          setArrowButtonOffset("lg:-right-[204px]")
          break;
      
          case 205:
          setArrowButtonOffset("lg:-right-[205px]")
          break;
      
          case 206:
          setArrowButtonOffset("lg:-right-[206px]")
          break;
      
          case 207:
          setArrowButtonOffset("lg:-right-[207px]")
          break;
      
          case 208:
          setArrowButtonOffset("lg:-right-[208px]")
          break;
      
          case 209:
          setArrowButtonOffset("lg:-right-[209px]")
          break;
      
          case 210:
          setArrowButtonOffset("lg:-right-[210px]")
          break;
      
          case 211:
          setArrowButtonOffset("lg:-right-[211px]")
          break;
      
          case 212:
          setArrowButtonOffset("lg:-right-[212px]")
          break;
      
          case 213:
          setArrowButtonOffset("lg:-right-[213px]")
          break;
      
          case 214:
          setArrowButtonOffset("lg:-right-[214px]")
          break;
      
          case 215:
          setArrowButtonOffset("lg:-right-[215px]")
          break;
      
          case 216:
          setArrowButtonOffset("lg:-right-[216px]")
          break;
      
          case 217:
          setArrowButtonOffset("lg:-right-[217px]")
          break;
      
          case 218:
          setArrowButtonOffset("lg:-right-[218px]")
          break;
      
          case 219:
          setArrowButtonOffset("lg:-right-[219px]")
          break;
      
          case 220:
          setArrowButtonOffset("lg:-right-[220px]")
          break;
      
          case 221:
          setArrowButtonOffset("lg:-right-[221px]")
          break;
      
          case 222:
          setArrowButtonOffset("lg:-right-[222px]")
          break;
      
          case 223:
          setArrowButtonOffset("lg:-right-[223px]")
          break;
      
          case 224:
          setArrowButtonOffset("lg:-right-[224px]")
          break;
      
          case 225:
          setArrowButtonOffset("lg:-right-[225px]")
          break;
      
          case 226:
          setArrowButtonOffset("lg:-right-[226px]")
          break;
      
          case 227:
          setArrowButtonOffset("lg:-right-[227px]")
          break;
      
          case 228:
          setArrowButtonOffset("lg:-right-[228px]")
          break;
      
          case 229:
          setArrowButtonOffset("lg:-right-[229px]")
          break;
      
          case 230:
          setArrowButtonOffset("lg:-right-[230px]")
          break;
      
          case 231:
          setArrowButtonOffset("lg:-right-[231px]")
          break;
      
          case 232:
          setArrowButtonOffset("lg:-right-[232px]")
          break;
      
          case 233:
          setArrowButtonOffset("lg:-right-[233px]")
          break;
      
          case 234:
          setArrowButtonOffset("lg:-right-[234px]")
          break;
      
          case 235:
          setArrowButtonOffset("lg:-right-[235px]")
          break;
      
          case 236:
          setArrowButtonOffset("lg:-right-[236px]")
          break;
      
          case 237:
          setArrowButtonOffset("lg:-right-[237px]")
          break;
      
          case 238:
          setArrowButtonOffset("lg:-right-[238px]")
          break;
      
          case 239:
          setArrowButtonOffset("lg:-right-[239px]")
          break;
      
          case 240:
          setArrowButtonOffset("lg:-right-[240px]")
          break;
      
          case 241:
          setArrowButtonOffset("lg:-right-[241px]")
          break;
      
          case 242:
          setArrowButtonOffset("lg:-right-[242px]")
          break;
      
          case 243:
          setArrowButtonOffset("lg:-right-[243px]")
          break;
      
          case 244:
          setArrowButtonOffset("lg:-right-[244px]")
          break;
      
          case 245:
          setArrowButtonOffset("lg:-right-[245px]")
          break;
      
          case 246:
          setArrowButtonOffset("lg:-right-[246px]")
          break;
      
          case 247:
          setArrowButtonOffset("lg:-right-[247px]")
          break;
      
          case 248:
          setArrowButtonOffset("lg:-right-[248px]")
          break;
      
          case 249:
          setArrowButtonOffset("lg:-right-[249px]")
          break;
      
          case 250:
          setArrowButtonOffset("lg:-right-[250px]")
          break;
      
          case 251:
          setArrowButtonOffset("lg:-right-[251px]")
          break;
      
          case 252:
          setArrowButtonOffset("lg:-right-[252px]")
          break;
      
          case 253:
          setArrowButtonOffset("lg:-right-[253px]")
          break;
      
          case 254:
          setArrowButtonOffset("lg:-right-[254px]")
          break;
      
          case 255:
          setArrowButtonOffset("lg:-right-[255px]")
          break;
      
          case 256:
          setArrowButtonOffset("lg:-right-[256px]")
          break;
      
          case 257:
          setArrowButtonOffset("lg:-right-[257px]")
          break;
      
          case 258:
          setArrowButtonOffset("lg:-right-[258px]")
          break;
      
          case 259:
          setArrowButtonOffset("lg:-right-[259px]")
          break;
      
          case 260:
          setArrowButtonOffset("lg:-right-[260px]")
          break;
      
          case 261:
          setArrowButtonOffset("lg:-right-[261px]")
          break;
      
          case 262:
          setArrowButtonOffset("lg:-right-[262px]")
          break;
      
          case 263:
          setArrowButtonOffset("lg:-right-[263px]")
          break;
      
          case 264:
          setArrowButtonOffset("lg:-right-[264px]")
          break;
      
          case 265:
          setArrowButtonOffset("lg:-right-[265px]")
          break;
      
          case 266:
          setArrowButtonOffset("lg:-right-[266px]")
          break;
      
          case 267:
          setArrowButtonOffset("lg:-right-[267px]")
          break;
      
          case 268:
          setArrowButtonOffset("lg:-right-[268px]")
          break;
      
          case 269:
          setArrowButtonOffset("lg:-right-[269px]")
          break;
      
          case 270:
          setArrowButtonOffset("lg:-right-[270px]")
          break;
      
          case 271:
          setArrowButtonOffset("lg:-right-[271px]")
          break;
      
          case 272:
          setArrowButtonOffset("lg:-right-[272px]")
          break;
      
          case 273:
          setArrowButtonOffset("lg:-right-[273px]")
          break;
      
          case 274:
          setArrowButtonOffset("lg:-right-[274px]")
          break;
      
          case 275:
          setArrowButtonOffset("lg:-right-[275px]")
          break;
      
          case 276:
          setArrowButtonOffset("lg:-right-[276px]")
          break;
      
          case 277:
          setArrowButtonOffset("lg:-right-[277px]")
          break;
      
          case 278:
          setArrowButtonOffset("lg:-right-[278px]")
          break;
      
          case 279:
          setArrowButtonOffset("lg:-right-[279px]")
          break;
      
          case 280:
          setArrowButtonOffset("lg:-right-[280px]")
          break;
      
          case 281:
          setArrowButtonOffset("lg:-right-[281px]")
          break;
      
          case 282:
          setArrowButtonOffset("lg:-right-[282px]")
          break;
      
          case 283:
          setArrowButtonOffset("lg:-right-[283px]")
          break;
      
          case 284:
          setArrowButtonOffset("lg:-right-[284px]")
          break;
      
          case 285:
          setArrowButtonOffset("lg:-right-[285px]")
          break;
      
          case 286:
          setArrowButtonOffset("lg:-right-[286px]")
          break;
      
          case 287:
          setArrowButtonOffset("lg:-right-[287px]")
          break;
      
          case 288:
          setArrowButtonOffset("lg:-right-[288px]")
          break;
      
          case 289:
          setArrowButtonOffset("lg:-right-[289px]")
          break;
      
          case 290:
          setArrowButtonOffset("lg:-right-[290px]")
          break;
      
          case 291:
          setArrowButtonOffset("lg:-right-[291px]")
          break;
      
          case 292:
          setArrowButtonOffset("lg:-right-[292px]")
          break;
      
          case 293:
          setArrowButtonOffset("lg:-right-[293px]")
          break;
      
          case 294:
          setArrowButtonOffset("lg:-right-[294px]")
          break;
      
          case 295:
          setArrowButtonOffset("lg:-right-[295px]")
          break;
      
          case 296:
          setArrowButtonOffset("lg:-right-[296px]")
          break;
      
          case 297:
          setArrowButtonOffset("lg:-right-[297px]")
          break;
      
          case 298:
          setArrowButtonOffset("lg:-right-[298px]")
          break;
      
          case 299:
          setArrowButtonOffset("lg:-right-[299px]")
          break;
      
          case 300:
          setArrowButtonOffset("lg:-right-[300px]")
          break;
      
          case 301:
          setArrowButtonOffset("lg:-right-[301px]")
          break;
      
          case 302:
          setArrowButtonOffset("lg:-right-[302px]")
          break;
      
          case 303:
          setArrowButtonOffset("lg:-right-[303px]")
          break;
      
          case 304:
          setArrowButtonOffset("lg:-right-[304px]")
          break;
      
          case 305:
          setArrowButtonOffset("lg:-right-[305px]")
          break;
      
          case 306:
          setArrowButtonOffset("lg:-right-[306px]")
          break;
      
          case 307:
          setArrowButtonOffset("lg:-right-[307px]")
          break;
      
          case 308:
          setArrowButtonOffset("lg:-right-[308px]")
          break;
      
          case 309:
          setArrowButtonOffset("lg:-right-[309px]")
          break;
      
          case 310:
          setArrowButtonOffset("lg:-right-[310px]")
          break;
      
          case 311:
          setArrowButtonOffset("lg:-right-[311px]")
          break;
      
          case 312:
          setArrowButtonOffset("lg:-right-[312px]")
          break;
      
          case 313:
          setArrowButtonOffset("lg:-right-[313px]")
          break;
      
          case 314:
          setArrowButtonOffset("lg:-right-[314px]")
          break;
      
          case 315:
          setArrowButtonOffset("lg:-right-[315px]")
          break;
      
          case 316:
          setArrowButtonOffset("lg:-right-[316px]")
          break;
      
          case 317:
          setArrowButtonOffset("lg:-right-[317px]")
          break;
      
          case 318:
          setArrowButtonOffset("lg:-right-[318px]")
          break;
      
          case 319:
          setArrowButtonOffset("lg:-right-[319px]")
          break;
      
          case 320:
          setArrowButtonOffset("lg:-right-[320px]")
          break;
      
          case 321:
          setArrowButtonOffset("lg:-right-[321px]")
          break;
      
          case 322:
          setArrowButtonOffset("lg:-right-[322px]")
          break;
      
          case 323:
          setArrowButtonOffset("lg:-right-[323px]")
          break;
      
          case 324:
          setArrowButtonOffset("lg:-right-[324px]")
          break;
      
          case 325:
          setArrowButtonOffset("lg:-right-[325px]")
          break;
      
          case 326:
          setArrowButtonOffset("lg:-right-[326px]")
          break;
      
          case 327:
          setArrowButtonOffset("lg:-right-[327px]")
          break;
      
          case 328:
          setArrowButtonOffset("lg:-right-[328px]")
          break;
      
          case 329:
          setArrowButtonOffset("lg:-right-[329px]")
          break;
      
          case 330:
          setArrowButtonOffset("lg:-right-[330px]")
          break;
      
          case 331:
          setArrowButtonOffset("lg:-right-[331px]")
          break;
      
          case 332:
          setArrowButtonOffset("lg:-right-[332px]")
          break;
      
          case 333:
          setArrowButtonOffset("lg:-right-[333px]")
          break;
      
          case 334:
          setArrowButtonOffset("lg:-right-[334px]")
          break;
      
          case 335:
          setArrowButtonOffset("lg:-right-[335px]")
          break;
      
          case 336:
          setArrowButtonOffset("lg:-right-[336px]")
          break;
      
          case 337:
          setArrowButtonOffset("lg:-right-[337px]")
          break;
      
          case 338:
          setArrowButtonOffset("lg:-right-[338px]")
          break;
      
          case 339:
          setArrowButtonOffset("lg:-right-[339px]")
          break;
      
          case 340:
          setArrowButtonOffset("lg:-right-[340px]")
          break;
      
          case 341:
          setArrowButtonOffset("lg:-right-[341px]")
          break;
      
          case 342:
          setArrowButtonOffset("lg:-right-[342px]")
          break;
      
          case 343:
          setArrowButtonOffset("lg:-right-[343px]")
          break;
      
          case 344:
          setArrowButtonOffset("lg:-right-[344px]")
          break;
      
          case 345:
          setArrowButtonOffset("lg:-right-[345px]")
          break;
      
          case 346:
          setArrowButtonOffset("lg:-right-[346px]")
          break;
      
          case 347:
          setArrowButtonOffset("lg:-right-[347px]")
          break;
      
          case 348:
          setArrowButtonOffset("lg:-right-[348px]")
          break;
      
          case 349:
          setArrowButtonOffset("lg:-right-[349px]")
          break;
      
          case 350:
          setArrowButtonOffset("lg:-right-[350px]")
          break;
      
          case 351:
          setArrowButtonOffset("lg:-right-[351px]")
          break;
      
          case 352:
          setArrowButtonOffset("lg:-right-[352px]")
          break;
      
          case 353:
          setArrowButtonOffset("lg:-right-[353px]")
          break;
      
          case 354:
          setArrowButtonOffset("lg:-right-[354px]")
          break;
      
          case 355:
          setArrowButtonOffset("lg:-right-[355px]")
          break;
      
          case 356:
          setArrowButtonOffset("lg:-right-[356px]")
          break;
      
          case 357:
          setArrowButtonOffset("lg:-right-[357px]")
          break;
      
          case 358:
          setArrowButtonOffset("lg:-right-[358px]")
          break;
      
          case 359:
          setArrowButtonOffset("lg:-right-[359px]")
          break;
      
          case 360:
          setArrowButtonOffset("lg:-right-[360px]")
          break;
      
          case 361:
          setArrowButtonOffset("lg:-right-[361px]")
          break;
      
          case 362:
          setArrowButtonOffset("lg:-right-[362px]")
          break;
      
          case 363:
          setArrowButtonOffset("lg:-right-[363px]")
          break;
      
          case 364:
          setArrowButtonOffset("lg:-right-[364px]")
          break;
      
          case 365:
          setArrowButtonOffset("lg:-right-[365px]")
          break;
      
          case 366:
          setArrowButtonOffset("lg:-right-[366px]")
          break;
      
          case 367:
          setArrowButtonOffset("lg:-right-[367px]")
          break;
      
          case 368:
          setArrowButtonOffset("lg:-right-[368px]")
          break;
      
          case 369:
          setArrowButtonOffset("lg:-right-[369px]")
          break;
      
          case 370:
          setArrowButtonOffset("lg:-right-[370px]")
          break;
      
          case 371:
          setArrowButtonOffset("lg:-right-[371px]")
          break;
      
          case 372:
          setArrowButtonOffset("lg:-right-[372px]")
          break;
      
          case 373:
          setArrowButtonOffset("lg:-right-[373px]")
          break;
      
          case 374:
          setArrowButtonOffset("lg:-right-[374px]")
          break;
      
          case 375:
          setArrowButtonOffset("lg:-right-[375px]")
          break;
      
          case 376:
          setArrowButtonOffset("lg:-right-[376px]")
          break;
      
          case 377:
          setArrowButtonOffset("lg:-right-[377px]")
          break;
      
          case 378:
          setArrowButtonOffset("lg:-right-[378px]")
          break;
      
          case 379:
          setArrowButtonOffset("lg:-right-[379px]")
          break;
      
          case 380:
          setArrowButtonOffset("lg:-right-[380px]")
          break;
      
          case 381:
          setArrowButtonOffset("lg:-right-[381px]")
          break;
      
          case 382:
          setArrowButtonOffset("lg:-right-[382px]")
          break;
      
          case 383:
          setArrowButtonOffset("lg:-right-[383px]")
          break;
      
          case 384:
          setArrowButtonOffset("lg:-right-[384px]")
          break;
      
          case 385:
          setArrowButtonOffset("lg:-right-[385px]")
          break;
      
          case 386:
          setArrowButtonOffset("lg:-right-[386px]")
          break;
      
          case 387:
          setArrowButtonOffset("lg:-right-[387px]")
          break;
      
          case 388:
          setArrowButtonOffset("lg:-right-[388px]")
          break;
      
          case 389:
          setArrowButtonOffset("lg:-right-[389px]")
          break;
      
          case 390:
          setArrowButtonOffset("lg:-right-[390px]")
          break;
      
          case 391:
          setArrowButtonOffset("lg:-right-[391px]")
          break;
      
          case 392:
          setArrowButtonOffset("lg:-right-[392px]")
          break;
      
          case 393:
          setArrowButtonOffset("lg:-right-[393px]")
          break;
      
          case 394:
          setArrowButtonOffset("lg:-right-[394px]")
          break;
      
          case 395:
          setArrowButtonOffset("lg:-right-[395px]")
          break;
      
          case 396:
          setArrowButtonOffset("lg:-right-[396px]")
          break;
      
          case 397:
          setArrowButtonOffset("lg:-right-[397px]")
          break;
      
          case 398:
          setArrowButtonOffset("lg:-right-[398px]")
          break;
      
          case 399:
          setArrowButtonOffset("lg:-right-[399px]")
          break;
      
          case 400:
          setArrowButtonOffset("lg:-right-[400px]")
          break;
      
          case 401:
          setArrowButtonOffset("lg:-right-[401px]")
          break;
      
          case 402:
          setArrowButtonOffset("lg:-right-[402px]")
          break;
      
          case 403:
          setArrowButtonOffset("lg:-right-[403px]")
          break;
      
          case 404:
          setArrowButtonOffset("lg:-right-[404px]")
          break;
      
          case 405:
          setArrowButtonOffset("lg:-right-[405px]")
          break;
      
          case 406:
          setArrowButtonOffset("lg:-right-[406px]")
          break;
      
          case 407:
          setArrowButtonOffset("lg:-right-[407px]")
          break;
      
          case 408:
          setArrowButtonOffset("lg:-right-[408px]")
          break;
      
          case 409:
          setArrowButtonOffset("lg:-right-[409px]")
          break;
      
          case 410:
          setArrowButtonOffset("lg:-right-[410px]")
          break;
      
          case 411:
          setArrowButtonOffset("lg:-right-[411px]")
          break;
      
          case 412:
          setArrowButtonOffset("lg:-right-[412px]")
          break;
      
          case 413:
          setArrowButtonOffset("lg:-right-[413px]")
          break;
      
          case 414:
          setArrowButtonOffset("lg:-right-[414px]")
          break;
      
          case 415:
          setArrowButtonOffset("lg:-right-[415px]")
          break;
      
          case 416:
          setArrowButtonOffset("lg:-right-[416px]")
          break;
      
          case 417:
          setArrowButtonOffset("lg:-right-[417px]")
          break;
      
          case 418:
          setArrowButtonOffset("lg:-right-[418px]")
          break;
      
          case 419:
          setArrowButtonOffset("lg:-right-[419px]")
          break;
      
          case 420:
          setArrowButtonOffset("lg:-right-[420px]")
          break;
      
          case 421:
          setArrowButtonOffset("lg:-right-[421px]")
          break;
      
          case 422:
          setArrowButtonOffset("lg:-right-[422px]")
          break;
      
          case 423:
          setArrowButtonOffset("lg:-right-[423px]")
          break;
      
          case 424:
          setArrowButtonOffset("lg:-right-[424px]")
          break;
      
          case 425:
          setArrowButtonOffset("lg:-right-[425px]")
          break;
      
          case 426:
          setArrowButtonOffset("lg:-right-[426px]")
          break;
      
          case 427:
          setArrowButtonOffset("lg:-right-[427px]")
          break;
      
          case 428:
          setArrowButtonOffset("lg:-right-[428px]")
          break;
      
          case 429:
          setArrowButtonOffset("lg:-right-[429px]")
          break;
      
          case 430:
          setArrowButtonOffset("lg:-right-[430px]")
          break;
      
          case 431:
          setArrowButtonOffset("lg:-right-[431px]")
          break;
      
          case 432:
          setArrowButtonOffset("lg:-right-[432px]")
          break;
      
          case 433:
          setArrowButtonOffset("lg:-right-[433px]")
          break;
      
          case 434:
          setArrowButtonOffset("lg:-right-[434px]")
          break;
      
          case 435:
          setArrowButtonOffset("lg:-right-[435px]")
          break;
      
          case 436:
          setArrowButtonOffset("lg:-right-[436px]")
          break;
      
          case 437:
          setArrowButtonOffset("lg:-right-[437px]")
          break;
      
          case 438:
          setArrowButtonOffset("lg:-right-[438px]")
          break;
      
          case 439:
          setArrowButtonOffset("lg:-right-[439px]")
          break;
      
          case 440:
          setArrowButtonOffset("lg:-right-[440px]")
          break;
      
          case 441:
          setArrowButtonOffset("lg:-right-[441px]")
          break;
      
          case 442:
          setArrowButtonOffset("lg:-right-[442px]")
          break;
      
          case 443:
          setArrowButtonOffset("lg:-right-[443px]")
          break;
      
          case 444:
          setArrowButtonOffset("lg:-right-[444px]")
          break;
      
          case 445:
          setArrowButtonOffset("lg:-right-[445px]")
          break;
      
          case 446:
          setArrowButtonOffset("lg:-right-[446px]")
          break;
      
          case 447:
          setArrowButtonOffset("lg:-right-[447px]")
          break;
      
          case 448:
          setArrowButtonOffset("lg:-right-[448px]")
          break;
      
          case 449:
          setArrowButtonOffset("lg:-right-[449px]")
          break;
      
          case 450:
          setArrowButtonOffset("lg:-right-[450px]")
          break;
      
          case 451:
          setArrowButtonOffset("lg:-right-[451px]")
          break;
      
          case 452:
          setArrowButtonOffset("lg:-right-[452px]")
          break;
      
          case 453:
          setArrowButtonOffset("lg:-right-[453px]")
          break;
      
          case 454:
          setArrowButtonOffset("lg:-right-[454px]")
          break;
      
          case 455:
          setArrowButtonOffset("lg:-right-[455px]")
          break;
      
          case 456:
          setArrowButtonOffset("lg:-right-[456px]")
          break;
      
          case 457:
          setArrowButtonOffset("lg:-right-[457px]")
          break;
      
          case 458:
          setArrowButtonOffset("lg:-right-[458px]")
          break;
      
          case 459:
          setArrowButtonOffset("lg:-right-[459px]")
          break;
      
          case 460:
          setArrowButtonOffset("lg:-right-[460px]")
          break;
      
          case 461:
          setArrowButtonOffset("lg:-right-[461px]")
          break;
      
          case 462:
          setArrowButtonOffset("lg:-right-[462px]")
          break;
      
          case 463:
          setArrowButtonOffset("lg:-right-[463px]")
          break;
      
          case 464:
          setArrowButtonOffset("lg:-right-[464px]")
          break;
      
          case 465:
          setArrowButtonOffset("lg:-right-[465px]")
          break;
      
          case 466:
          setArrowButtonOffset("lg:-right-[466px]")
          break;
      
          case 467:
          setArrowButtonOffset("lg:-right-[467px]")
          break;
      
          case 468:
          setArrowButtonOffset("lg:-right-[468px]")
          break;
      
          case 469:
          setArrowButtonOffset("lg:-right-[469px]")
          break;
      
          case 470:
          setArrowButtonOffset("lg:-right-[470px]")
          break;
      
          case 471:
          setArrowButtonOffset("lg:-right-[471px]")
          break;
      
          case 472:
          setArrowButtonOffset("lg:-right-[472px]")
          break;
      
          case 473:
          setArrowButtonOffset("lg:-right-[473px]")
          break;
      
          case 474:
          setArrowButtonOffset("lg:-right-[474px]")
          break;
      
          case 475:
          setArrowButtonOffset("lg:-right-[475px]")
          break;
      
          case 476:
          setArrowButtonOffset("lg:-right-[476px]")
          break;
      
          case 477:
          setArrowButtonOffset("lg:-right-[477px]")
          break;
      
          case 478:
          setArrowButtonOffset("lg:-right-[478px]")
          break;
      
          case 479:
          setArrowButtonOffset("lg:-right-[479px]")
          break;
      
          case 480:
          setArrowButtonOffset("lg:-right-[480px]")
          break;
      
          case 481:
          setArrowButtonOffset("lg:-right-[481px]")
          break;
      
          case 482:
          setArrowButtonOffset("lg:-right-[482px]")
          break;
      
          case 483:
          setArrowButtonOffset("lg:-right-[483px]")
          break;
      
          case 484:
          setArrowButtonOffset("lg:-right-[484px]")
          break;
      
          case 485:
          setArrowButtonOffset("lg:-right-[485px]")
          break;
      
          case 486:
          setArrowButtonOffset("lg:-right-[486px]")
          break;
      
          case 487:
          setArrowButtonOffset("lg:-right-[487px]")
          break;
      
          case 488:
          setArrowButtonOffset("lg:-right-[488px]")
          break;
      
          case 489:
          setArrowButtonOffset("lg:-right-[489px]")
          break;
      
          case 490:
          setArrowButtonOffset("lg:-right-[490px]")
          break;
      
          case 491:
          setArrowButtonOffset("lg:-right-[491px]")
          break;
      
          case 492:
          setArrowButtonOffset("lg:-right-[492px]")
          break;
      
          case 493:
          setArrowButtonOffset("lg:-right-[493px]")
          break;
      
          case 494:
          setArrowButtonOffset("lg:-right-[494px]")
          break;
      
          case 495:
          setArrowButtonOffset("lg:-right-[495px]")
          break;
      
          case 496:
          setArrowButtonOffset("lg:-right-[496px]")
          break;
      
          case 497:
          setArrowButtonOffset("lg:-right-[497px]")
          break;
      
          case 498:
          setArrowButtonOffset("lg:-right-[498px]")
          break;
      
          case 499:
          setArrowButtonOffset("lg:-right-[499px]")
          break;
      }

    }, [whiteBoxPosition, carouselWidth])



    return (
    
      <div>
        <div className="grid grid-cols-1 lg:flex lg:flex-row z-10">
          <div className="relative lg:col-span-7">
            <div id="scrollCarousel" ref={scrollCarousel} className="flex flex-row w-full overflow-x-scroll overflow-y-clip snap-x snap-mandatory scrollbar-hide lg:w-[60vw] lg:h-[65vh] 1.5xl:h-[66vh]">
              <picture ref={firstRef} className="w-full h-full min-w-max snap-always snap-center">
                <source media="(min-width: 768px)" srcSet={"/desktop-image-hero-1.jpg"} />
                <img alt="White chair and wooden table with bonsai tree on top" src={"/mobile-image-hero-1.jpg"} className="w-[100vw] lg:h-full lg:w-[60vw]"/>
              </picture>
              <picture ref={secondRef} className="w-full min-w-max snap-always snap-center">
                <source media="(min-width: 768px)" srcSet={"/desktop-image-hero-2.jpg"} />
                <img alt="White grey and yellow chairs" src={"/mobile-image-hero-2.jpg"} className="w-[100vw] lg:h-full lg:w-[60vw]"/>
              </picture>
              <picture ref={thirdRef} className="w-full min-w-max snap-always snap-center">
                <source media="(min-width: 768px)" srcSet={"/desktop-image-hero-3.jpg"} />
                <img alt="Black chair" src={"/mobile-image-hero-3.jpg"} className="w-[100vw] lg:h-full lg:w-[60vw]"/>
              </picture>
            </div>

            <div className={`absolute bottom-0 right-0 ${arrowButtonOffset} flex z-[25]`}>
              <button onClick={previousPage} className="bg-black text-white hover:bg-neutral-600 transition-all ease-in out">
                <img src="/icon-angle-left.svg" style={{'padding': `${arrowButtonWidth}px`}} />
              </button>
              <button onClick={nextPage} className="bg-black text-white hover:bg-neutral-600 transition-all ease-in out">
                <img src="/icon-angle-right.svg" style={{'padding': `${arrowButtonWidth}px`}} />
              </button>
            </div>

          </div>

          <div className="bg-white lg:flex lg:flex-row z-20">
            <div className="w-full px-8 py-16 text-left 1.5xl:px-16 1.5xl:py-24">
              <h1 className="text-[2.5rem] text-black font-semibold tracking-[-.06em] leading-none 1.5xl:text-[3rem]">
                {title}
              </h1>
              <br />
              <p className="text-base text-[#999999] font-semibold tracking-[-.03em] lg:text-sm 1.5xl:text-[1.1rem]">
                {desc}
              </p>
              <br />
              <button>
                <div className="flex flex-row gap-x-6 transition-all ease-in-out hover:opacity-50">
                  <div className="font-semibold tracking-[0.7em]">
                  SHOP NOW {arrowButtonWidth}
                  </div>
                  <div>
                    <Image alt="Shop now button arrow" src="/icon-arrow.svg" width="36" height="12" />
                  </div>
                </div>
              </button>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr_3fr]">
        <div className="w-full">
            <img alt="Elegant dimly lit room with dark furniture" src="/image-about-dark.jpg" className="w-full h-full" />
        </div>

        <div className="bg-white">
            <div className="text-left px-8 py-16 lg:pb-0 lg:pt-6 1.5xl:pt-16 1.5xl:px-[4.45rem]">
                <h1 className="text-base uppercase text-black font-bold tracking-[.285em] leading-none">
                About our furniture
                </h1>
            <br />
                <h1 className="text-base text-[#999999] font-semibold tracking-[-.03em] lg:text-sm">
                Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </h1>
            </div>
        </div>

        <div ref={rightAlign} className="w-full">
            <img alt="Brightly lit white room with white chair" src="/image-about-light.jpg" className="w-full h-full" />
        </div>
        </div>
      </div>

  )
}

export default Carousel