import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Badge from "react-bootstrap/Badge";
import { TItemTable } from "../types/index";

type TDataTable = {
  dataTable: Array<TItemTable>;
  onClickPage: (p: number) => void;
  onOpenModal: {
    view: (data: TItemTable) => void;
    edit: (data: TItemTable) => void;
    delete: (data: TItemTable) => void;
  };
  activePage: number;
};

type TPaginationList = {
  onClickPage: (p: number) => void;
  activePage: number;
};

const PaginationList = ({ onClickPage, activePage }: TPaginationList) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((number) => {
        return (
          <Pagination.Item
            onClick={() => onClickPage(number)}
            key={number}
            active={number === activePage}
          >
            {number}
          </Pagination.Item>
        );
      })}
    </>
  );
};

const ListTable = ({
  dataTable,
  onClickPage,
  activePage,
  onOpenModal,
}: TDataTable) => {
  const mapStatus = (status: number) => {
    switch (status) {
      case 3:
        return <Badge bg="success">Shipped</Badge>;
      case 2:
        return <Badge bg="warning">Confirmed</Badge>;
      case 1:
        return <Badge bg="secondary">Pending</Badge>;
      default:
        return "Unknown";
    }
  };

  return (
    <div>
      <Table responsive={true} striped borderless>
        <thead>
          <tr>
            <th>No.</th>
            <th>Order ID</th>
            <th>Created At</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.no}</td>
                <td>{data.orderNumber}</td>
                <td>{data.createdAt}</td>
                <td>{data.username}</td>
                <td>{mapStatus(data.status)}</td>
                <td>{data.total}</td>
                <td>
                  <div className="d-flex flex-lg-row gap-3  ">
                    <div role="button" onClick={() => onOpenModal.view(data)}>
                      <i className="bi bi-box-arrow-up-right"></i>
                    </div>
                    <div role="button" onClick={() => onOpenModal.edit(data)}>
                      <i className="bi bi-pencil-square"></i>
                    </div>
                    <div role="button" onClick={() => onOpenModal.delete(data)}>
                      <i className="bi bi-trash"></i>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div
        style={{ borderBottom: "1px solid #eee" }}
        className="d-flex justify-content-end mt-2"
      >
        <Pagination>
          <PaginationList onClickPage={onClickPage} activePage={activePage} />
        </Pagination>
      </div>
    </div>
  );
};

export default ListTable;
