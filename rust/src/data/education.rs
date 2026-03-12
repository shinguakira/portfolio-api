use lazy_static::lazy_static;
use crate::model::education::EducationHistory;

lazy_static! {
    pub static ref EDUCATION_JA: Vec<EducationHistory> = vec![
        EducationHistory {
            start_year: "2018/4".to_string(),
            end_year: "2022/4(退学)".to_string(),
            school: "茨城大学".to_string(),
            department: "工学部情報工学科".to_string(),
            description: "情報工学科は、プログラミングやネットワークなど情報に関わる物事を、情報科学と比べより、実用的に学ぶ学科。JABEE認定を受けている学科であり、卒業とともに技術士の1次試験を免除可能になる。".to_string(),
        },
        EducationHistory {
            start_year: "2016/4".to_string(),
            end_year: "2018/3".to_string(),
            school: "対馬高校".to_string(),
            department: "普通科".to_string(),
            description: "地元の高校。普通科のほかには、商業科、国際文化交流科(韓国語)が存在".to_string(),
        },
    ];

    pub static ref EDUCATION_EN: Vec<EducationHistory> = vec![
        EducationHistory {
            start_year: "2018/4".to_string(),
            end_year: "2022/4(退学)".to_string(),
            school: "Ibaraki University".to_string(),
            department: "Faculty of Engineering, Department of Computer and Information Sciences".to_string(),
            description: "The Department of Computer and Information Sciences focuses on practical applications of programming, networking, and other information technology fields compared to information science. It is JABEE-accredited, which exempts graduates from the first stage of the Professional Engineer examination.".to_string(),
        },
        EducationHistory {
            start_year: "2016/4".to_string(),
            end_year: "2018/3".to_string(),
            school: "Tsushima High School".to_string(),
            department: "General Studies".to_string(),
            description: "Local high school. In addition to General Studies, it also offers Commercial Studies and International Cultural Exchange (Korean language) departments.".to_string(),
        },
    ];
}
