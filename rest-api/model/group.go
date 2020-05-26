package model

type Group struct {
	Id        int64  `json:"id,omitempty" key:"primary" autoincr:"1" column:"id"`
	GroupName string `json:"group_name" column:"group_name"`
	GroupInfo string `json:"group_info" column:"group_info"`
}

func (user *Group) Table() string {
	return "groups1"
}

func (user *Group) String() string {
	return Stringify(user)
}
