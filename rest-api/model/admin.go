package model

type Admin struct {
	Id   int64  `json:"id,omitempty" key:"primary" autoincr:"1" column:"id"`
	Role string `json:"role" column:"role"`
}

func (user *Admin) Table() string {
	return "adminList"
}

func (user *Admin) String() string {
	return Stringify(user)
}
