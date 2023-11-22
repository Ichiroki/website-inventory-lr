import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';
import * as React from 'react';

function BarangIndex({ auth, barangs }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [filteredBarangs, setFilteredBarangs] = React.useState(barangs);
  const [searchTerm, setSearchTerm] = React.useState('');

  // Handler untuk perubahan pada input filter
  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter barangs berdasarkan nama
    const filtered = barangs.filter((barang) =>
      barang.nama.toLowerCase().includes(term)
    );
    setFilteredBarangs(filtered);
  };

  return (
    <>
      <AuthenticatedLayout
        auth={auth}
        header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Barang
          </h2>
        }
      >
        <Head title="Barang" />
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg px-12 py-6">
              <div>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                  Create
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      >
                        Duis mollis, est non commodo luctus, nisi erat
                        porttitor ligula.
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>

                {/* Input filter */}
                <TextField
                  color='primary'
                  label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FilterListIcon />
                      </InputAdornment>
                    ),
                  }}
                  style={{ marginLeft: '1rem', marginBottom: '1rem' }}
                />

                <TableContainer component={Paper} margin="dense">
                  <Table sx={{ minWidth: 650 }} aria-label="simple-label">
                    <TableHead>
                      <TableRow>
                        <TableCell>No</TableCell>
                        <TableCell>Nomor Barang</TableCell>
                        <TableCell>Nama</TableCell>
                        <TableCell>Stocks</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredBarangs.map((barang, index) => (
                        <TableRow key={barang.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{barang.no_barang}</TableCell>
                          <TableCell>{barang.nama}</TableCell>
                          <TableCell>{barang.stocks}</TableCell>
                          <TableCell>
                            <Stack
                              spacing={{ xs: 1, sm: 2 }}
                              direction="row"
                              useFlexGap
                              flexWrap="wrap"
                            >
                              {/* Isi dengan elemen-elemen yang sesuai */}
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}

export default BarangIndex;
