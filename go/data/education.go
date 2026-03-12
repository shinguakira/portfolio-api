package data

import "github.com/shinguakira/portfolio-api-go/model"

var EducationJA = []model.EducationHistory{
	{
		StartYear:   "2018/4",
		EndYear:     "2022/4(退学)",
		School:      "茨城大学",
		Department:  "工学部情報工学科",
		Description: "情報工学科は、プログラミングやネットワークなど情報に関わる物事を、情報科学と比べより、実用的に学ぶ学科。JABEE認定を受けている学科であり、卒業とともに技術士の1次試験を免除可能になる。",
	},
	{
		StartYear:   "2016/4",
		EndYear:     "2018/3",
		School:      "対馬高校",
		Department:  "普通科",
		Description: "地元の高校。普通科のほかには、商業科、国際文化交流科(韓国語)が存在",
	},
}

var EducationEN = []model.EducationHistory{
	{
		StartYear:   "2018/4",
		EndYear:     "2022/4(退学)",
		School:      "Ibaraki University",
		Department:  "Faculty of Engineering, Department of Computer and Information Sciences",
		Description: "The Department of Computer and Information Sciences focuses on practical applications of programming, networking, and other information technology fields compared to information science. It is JABEE-accredited, which exempts graduates from the first stage of the Professional Engineer examination.",
	},
	{
		StartYear:   "2016/4",
		EndYear:     "2018/3",
		School:      "Tsushima High School",
		Department:  "General Studies",
		Description: "Local high school. In addition to General Studies, it also offers Commercial Studies and International Cultural Exchange (Korean language) departments.",
	},
}
