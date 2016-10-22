namespace CrouchButchers.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CustomerNote")]
    public partial class CustomerNote
    {
        [DisplayName("Note ID")]
        public int CustomerNoteId { get; set; }

        public int CustomerId { get; set; }

        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DisplayName("Note Date")]
        public DateTime NoteDate { get; set; }

        [Required]
        [StringLength(8000)]
        [DisplayName("Note Text")]
        public string NoteText { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
