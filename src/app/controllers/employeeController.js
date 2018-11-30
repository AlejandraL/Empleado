const dbConnection = require('../../config/dbConnection');
const conn = dbConnection();
const controller = {};

controller.list = (req, res) => {

    conn.query('SELECT * FROM employee', (err, result) => {

        if (err) {
            res.json(err);
        }

        res.render('employee', {
            employee: result

        });
    });
}

controller.add = (req, res) => {
    const { name, age, health_service, disability, position } = req.body;

    conn.query('INSERT INTO employee SET ?',
        {
            name,
            age,
            health_service,
            disability,
            position
        }, (err, result) => {
            res.redirect('/employee');
        });
};

controller.edit = (req, res) => {
    const { id_employee } = req.params;

    conn.query("SELECT * FROM employee WHERE id_employee = ?", [id_employee], (err, rows) => {
        res.render('employeesUpdate', {
            employee: rows[0]
        });
    });
};


controller.update = (req, res) => {
    const { id_employee } = req.params;
    const newEmployee = req.body;

    conn.query('UPDATE employee SET ? WHERE id_employee = ?', [newEmployee, id_employee], (err, rows) => {
        res.redirect('/employee');
    });
};

controller.delete = (req, res) => {
    const { id_employee } = req.params;

    conn.query('DELETE FROM employee WHERE id_employee = ?', [id_employee], (err, rows) => {
        res.redirect('/employee');
    });
};

module.exports = controller;