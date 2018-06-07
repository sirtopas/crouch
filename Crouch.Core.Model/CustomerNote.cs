namespace Crouch.Core.Model
{
    using System;
    using System.ComponentModel;

    public partial class CustomerNote
    {
        [DisplayName("Note ID")]
        public int CustomerNoteId { get; set; }

        public int CustomerId { get; set; }

		[DisplayName("Note Date")]
        public DateTime NoteDate { get; set; }

        [DisplayName("Note Text")]
		public string NoteText { get; set; }

        public virtual Customer Customer { get; set; }
    }
}