package admin

import (
	"context"
	"database/sql"

	"github.com/pucsd2020-pp/rest-api/driver"
	"github.com/pucsd2020-pp/rest-api/model"
)

type adminRepository struct {
	conn *sql.DB
}

func NewAdminRepository(conn *sql.DB) *adminRepository {
	return &adminRepository{conn: conn}
}

func (admin *adminRepository) GetByID(cntx context.Context, id int64) (interface{}, error) {
	obj := new(model.Admin)
	return driver.GetById(admin.conn, obj, id)
}

func (admin *adminRepository) Create(cntx context.Context, obj interface{}) (interface{}, error) {
	// usr := obj.(*model.Admin)
	usr := obj.(model.Admin)
	// result, err := driver.Create(admin.conn, usr)
	result, err := driver.Create(admin.conn, &usr)
	if nil != err {
		return 0, err
	}

	id, _ := result.LastInsertId()
	usr.Id = id
	return id, nil
}

func (admin *adminRepository) Update(cntx context.Context, obj interface{}) (interface{}, error) {
	// usr := obj.(*model.Admin)
	usr := obj.(model.Admin)
	// err := driver.UpdateById(admin.conn, usr)
	err := driver.UpdateById(admin.conn, &usr)
	return obj, err
}

func (admin *adminRepository) Delete(cntx context.Context, id int64) error {
	obj := &model.Admin{Id: id}
	return driver.DeleteById(admin.conn, obj, id)
}

func (admin *adminRepository) GetAll(cntx context.Context) ([]interface{}, error) {
	obj := &model.Admin{}
	return driver.GetAll(admin.conn, obj, 0, 0)
}
