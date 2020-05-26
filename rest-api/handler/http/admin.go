package http

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi"

	"github.com/pucsd2020-pp/rest-api/handler"
	"github.com/pucsd2020-pp/rest-api/model"
	"github.com/pucsd2020-pp/rest-api/repository"
	"github.com/pucsd2020-pp/rest-api/repository/admin"
)

type Admin struct {
	handler.HTTPHandler
	repo repository.IRepository
}

func NewAdminHandler(conn *sql.DB) *Admin {
	return &Admin{
		repo: admin.NewAdminRepository(conn),
	}
}

func (admin *Admin) GetHTTPHandler() []*handler.HTTPHandler {
	return []*handler.HTTPHandler{
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodGet, Path: "admin/{id}", Func: admin.GetByID},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPost, Path: "admin", Func: admin.Create},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodPut, Path: "admin/{id}", Func: admin.Update},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodDelete, Path: "admin/{id}", Func: admin.Delete},
		&handler.HTTPHandler{Authenticated: true, Method: http.MethodGet, Path: "admin", Func: admin.GetAll},
	}
}

func (admin *Admin) GetByID(w http.ResponseWriter, r *http.Request) {
	var usr interface{}
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	for {
		if nil != err {
			break
		}

		usr, err = admin.repo.GetByID(r.Context(), id)
		break
	}

	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (admin *Admin) Create(w http.ResponseWriter, r *http.Request) {
	var usr model.Admin
	err := json.NewDecoder(r.Body).Decode(&usr)
	for {
		if nil != err {
			break
		}

		_, err = admin.repo.Create(r.Context(), usr)
		break
	}
	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (admin *Admin) Update(w http.ResponseWriter, r *http.Request) {
	var iUsr interface{}
	id, _ := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	usr := model.Admin{}
	err := json.NewDecoder(r.Body).Decode(&usr)
	for {
		if nil != err {
			break
		}
		usr.Id = id
		if nil != err {
			break
		}

		// set logged in admin id for tracking update
		// usr.UpdatedBy = 0

		iUsr, err = admin.repo.Update(r.Context(), usr)
		if nil != err {
			break
		}
		usr = iUsr.(model.Admin)
		break
	}

	handler.WriteJSONResponse(w, r, usr, http.StatusOK, err)
}

func (admin *Admin) Delete(w http.ResponseWriter, r *http.Request) {
	var payload string
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	for {
		if nil != err {
			break
		}

		err = admin.repo.Delete(r.Context(), id)
		if nil != err {
			break
		}
		payload = "Admin deleted successfully"
		break
	}

	handler.WriteJSONResponse(w, r, payload, http.StatusOK, err)
}

func (admin *Admin) GetAll(w http.ResponseWriter, r *http.Request) {
	usrs, err := admin.repo.GetAll(r.Context())
	handler.WriteJSONResponse(w, r, usrs, http.StatusOK, err)
}
