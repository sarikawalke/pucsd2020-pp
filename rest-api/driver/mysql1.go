package driver

import (
	"bytes"
	"database/sql"
	"log"
	"reflect"

	_ "github.com/go-sql-driver/mysql"
	"github.com/pucsd2020-pp/rest-api/model"
)

func GetGroupById(conn *sql.DB, object model.IModel, id int64) ([]interface{}, error) {
	rValue := reflect.ValueOf(object)
	rType := reflect.TypeOf(object)

	columns := []string{}
	pointers := make([]interface{}, 0)

	for idx := 0; idx < rValue.Elem().NumField(); idx++ {
		field := rType.Elem().Field(idx)
		if COLUMN_INGNORE_FLAG == field.Tag.Get("ignore") {
			continue
		}

		column := field.Tag.Get("column")
		columns = append(columns, column)
		pointers = append(pointers, rValue.Elem().Field(idx).Addr().Interface())
	}

	var queryBuffer bytes.Buffer

	// queryBuffer.WriteString("SELECT ")
	// queryBuffer.WriteString(strings.Join(columns, ", "))
	queryBuffer.WriteString("SELECT group_id")
	queryBuffer.WriteString(" FROM ")
	queryBuffer.WriteString(object.Table())
	queryBuffer.WriteString(" WHERE user_id = ?")

	query := queryBuffer.String()

	//	log.Printf("GetById sql: %s\n", query)
	row, err := conn.Query(query, id)
	if nil != err {
		log.Printf("Error conn.Query: %s\n\tError Query: %s\n", err.Error(), query)
		return nil, err
	}

	defer row.Close()
	objects := make([]interface{}, 0)
	recds, err := row.Columns()
	for row.Next() {
		group_id := 0
		if nil != err {
			log.Printf("Error row.Columns(): %s\n\tError Query: %s\n", err.Error(), query)
			return nil, err
		}
		values := make([]interface{}, len(recds))
		recdsWrite := make([]string, len(recds))
		for index, _ := range recds {
			values[index] = &recdsWrite[index]
		}
		// err = row.Scan(values...)
		err = row.Scan(&group_id)

		if nil != err {
			log.Printf("Error: row.Scan: %s\n", err.Error())
			return nil, err
		}

		// objects = append(objects, values)
		objects = append(objects, group_id)

	}
	return objects, nil
}
